<?php
namespace ImmediateSolutions\Api\Agent\Processors;
use ImmediateSolutions\Api\Support\Processor;
use ImmediateSolutions\Core\Agent\Enums\Plan;
use ImmediateSolutions\Core\Agent\Payloads\QuotePayload;
use ImmediateSolutions\Support\Validation\Rules\Enum;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuoteProcessor extends Processor
{
    protected function schema()
    {
        return [
            'price' => 'float',
            'plan' => new Enum(Plan::class),
            'note' => 'string',
            'commission' => 'int',
            'document' => 'document'
        ];
    }

    /**
     * @return QuotePayload
     */
    public function createPayload()
    {
        $payload = new QuotePayload();

        $this->set($payload, 'price');
        $this->set($payload, 'plan', $this->asEnum(Plan::class));
        $this->set($payload, 'note');
        $this->set($payload, 'commission');
        $this->set($payload, 'document', $this->asDocument(), false);

        return $payload;
    }
}