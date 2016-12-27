<?php
namespace ImmediateSolutions\Api\Agent\Serializers;
use ImmediateSolutions\Api\Support\Serializer;
use ImmediateSolutions\Core\Agent\Entities\Post;
use ImmediateSolutions\Core\Agent\Services\QuoteService;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class RequestSerializer extends Serializer
{
    /**
     * @param Post $post
     * @return array
     */
    public function __invoke(Post $post)
    {
        $data = $this->delegate(PostSerializer::class, $post);

        /**
         * @var QuoteService $quoteService
         */
        $quoteService = $this->container->get(QuoteService::class);

        if ($quote = $quoteService->getByRequestAndOwnerId($post->getId(), $this->session->getUser()->getId())){
            $quote = $this->delegate(QuoteSerializer::class, $quote);
        }

        $data['quote'] = $quote;

        return $data;
    }
}