<?php
namespace ImmediateSolutions\Core\Agent\Services;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Entities\Post;
use ImmediateSolutions\Core\Agent\Entities\Quote;
use ImmediateSolutions\Core\Agent\Payloads\QuotePayload;
use ImmediateSolutions\Core\Agent\Validation\QuoteValidator;
use ImmediateSolutions\Core\Document\Entities\Document;
use ImmediateSolutions\Core\Document\Payloads\IdentifierPayload;
use ImmediateSolutions\Core\Support\Service;
use ImmediateSolutions\Support\Validation\PresentableException;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuoteService extends Service
{
    /**
     * @param int $requestId
     * @param int $ownerId
     * @return Quote
     */
    public function getByRequestAndOwnerId($requestId, $ownerId)
    {
        return $this->entityManager->getRepository(Quote::class)->findOneBy([
            'request' => $requestId,
            'owner' => $ownerId
        ]);
    }

    /**
     * @param int $requestId
     * @param int $ownerId
     * @param QuotePayload $payload
     * @return Quote
     */
    public function create($requestId, $ownerId, QuotePayload $payload)
    {
        $exists = $this->entityManager->getRepository(Quote::class)->exists([
            'request' => $requestId,
            'owner' => $ownerId
        ]);

        if ($exists){
            throw new PresentableException('You have already proposed a quote to this request.');
        }

        (new QuoteValidator($this->container))->validate($payload);

        $quote = new Quote();

        /**
         * @var Post $request
         */
        $request = $this->entityManager->getReference(Post::class, $requestId);

        $quote->setRequest($request);

        /**
         * @var Agent $owner
         */
        $owner = $this->entityManager->getReference(Agent::class, $ownerId);

        $quote->setOwner($owner);

        $this->exchange($payload, $quote);

        $this->entityManager->persist($quote);
        $this->entityManager->flush();

        return $quote;
    }

    /**
     * @param int $requestId
     * @param int $ownerId
     * @param QuotePayload $payload
     */
    public function updateByRequestAndOwnerId($requestId, $ownerId, QuotePayload $payload)
    {

        $quote = $this->entityManager->getRepository(Quote::class)
            ->findOneBy(['request' => $requestId, 'owner' => $ownerId]);

        (new QuoteValidator($this->container, $quote))->validate($payload, true);

        $this->exchange($payload, $quote);

        $this->entityManager->flush();
    }

    /**
     * @param QuotePayload $payload
     * @param Quote $quote
     */
    private function exchange(QuotePayload $payload, Quote $quote)
    {
        $this->transfer($payload, $quote, 'price');
        $this->transfer($payload, $quote, 'plan');
        $this->transfer($payload, $quote, 'note');
        $this->transfer($payload, $quote, 'commission');
        $this->transfer($payload, $quote, 'document', function(IdentifierPayload $payload){

            /**
             * @var Document $document
             */
            $document = $this->entityManager->getReference(Document::class, $payload->getId());

            return $document;
        });
    }

    /**
     * @param int $requestId
     * @param int $ownerId
     */
    public function deleteByRequestAndOwnerId($requestId, $ownerId)
    {
        /**
         * @var Quote $quote
         */
        $quote = $this->entityManager->getRepository(Quote::class)->findOneBy([
            'request' => $requestId,
            'owner' => $ownerId
        ]);

        $quote->setDocument(null);

        $this->entityManager->remove($quote);
        $this->entityManager->flush();
    }
}