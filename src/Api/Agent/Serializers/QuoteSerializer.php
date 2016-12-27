<?php
namespace ImmediateSolutions\Api\Agent\Serializers;
use ImmediateSolutions\Api\Document\Serializers\DocumentSerializer;
use ImmediateSolutions\Api\Support\Serializer;
use ImmediateSolutions\Core\Agent\Entities\Quote;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuoteSerializer extends Serializer
{
    public function __invoke(Quote $quote)
    {
        return [
            'id' => $quote->getId(),
            'price' => $quote->getPrice(),
            'plan' => $this->enum($quote->getPlan()),
            'commission' => $quote->getCommission(),
            'isPicked' => $quote->isPicked(),
            'document' => $this->delegate(DocumentSerializer::class, $quote->getDocument()),
            'createdAt' => $this->datetime($quote->getCreatedAt())
        ];
    }
}