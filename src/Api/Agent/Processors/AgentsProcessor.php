<?php
namespace ImmediateSolutions\Api\Agent\Processors;
use ImmediateSolutions\Api\Support\Processor;
use ImmediateSolutions\Core\Agent\Payloads\AgentPayload;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentsProcessor extends Processor
{
    protected function schema()
    {
        return [
            'email' => 'string',
            'password' => 'string',
            'fullName' => 'string'
        ];
    }

    /**
     * @return AgentPayload
     */
    public function createPayload()
    {
        $payload = new AgentPayload();

        $this->set($payload, 'email');
        $this->set($payload, 'password');
        $this->set($payload, 'fullName');

        return $payload;
    }
}