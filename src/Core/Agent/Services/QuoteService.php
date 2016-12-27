<?php
namespace ImmediateSolutions\Core\Agent\Services;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Entities\Post;
use ImmediateSolutions\Core\Agent\Entities\Quote;
use ImmediateSolutions\Core\Agent\Enums\Status;
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
     * @param int $postId
     * @return Post[]
     */
    public function getAll($postId)
    {
        return $this->entityManager->getRepository(Quote::class)
            ->findBy(['request' => $postId]);
    }

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
        $request = $this->entityManager->find(Post::class, $requestId);

        $quote->setRequest($request);

        $request->setStatus(new Status(Status::ACTIVE));

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
     * @param int $quoteId
     */
    public function pick($quoteId)
    {
        /**
         * @var Quote $quote
         */
        $quote = $this->entityManager->find(Quote::class, $quoteId);

        if ($quote->isPicked()){
            return ;
        }

        $request = $quote->getRequest();

        /**
         * @var Quote $picked
         */
        $picked = $this->entityManager->getRepository(Quote::class)->findOneBy([
            'isPicked' => true, 'request' => $request->getId()
        ]);

        if ($picked){
            $picked->setPicked(false);
        }

        $quote->setPicked(true);

        $this->entityManager->flush();

        $this->adjustRequestStatus($request->getId());
    }

    /**
     * @param int $quoteId
     */
    public function unpick($quoteId)
    {
        /**
         * @var Quote $quote
         */
        $quote = $this->entityManager->find(Quote::class, $quoteId);

        if (!$quote->isPicked()){
            return ;
        }

        $quote->setPicked(false);

        $this->entityManager->flush();

        $this->adjustRequestStatus($quote->getId());
    }

    /**
     * @param int $requestId
     */
    private function adjustRequestStatus($requestId)
    {
        /**
         * @var Post $request
         */
        $request = $this->entityManager->find(Post::class, $requestId);

        if ($this->entityManager->getRepository(Quote::class)->exists([
            'request' => $requestId, 'isPicked' => true])){
            $request->setStatus(new Status(Status::DONE));
        } elseif ($this->entityManager->getRepository(Quote::class)->exists([
            'request' => $requestId
        ])) {
            $request->setStatus(new Status(Status::ACTIVE));
        } else {
            $request->setStatus(new Status(Status::OPEN));
        }

        $this->entityManager->flush();
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

        $this->deleteInMemory($quote);

        $this->entityManager->flush();

        $this->adjustRequestStatus($requestId);
    }

    /**
     * @param Quote $quote
     */
    public function deleteInMemory(Quote $quote)
    {
        $quote->setDocument(null);
        $this->entityManager->remove($quote);
    }

    /**
     * @param int $requestId
     * @param int $ownerId
     * @return bool
     */
    public function existsByRequestAndOwnerId($requestId, $ownerId)
    {
        return $this->entityManager->getRepository(Quote::class)->exists([
            'request' => $requestId,
            'owner' => $ownerId
        ]);
    }
}