<?php
namespace ImmediateSolutions\Api\Agent\Processors;
use ImmediateSolutions\Api\Support\Processor;
use ImmediateSolutions\Core\Agent\Payloads\PostPayload;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostsProcessor extends Processor
{
    protected function schema()
    {
        return [
            'title' => 'string',
            'publicMessage' => 'string',
            'privateMessage' => 'string',
            'clientName' => 'string',
            'clientPhone' => 'string',
            'noPersonalInfoInPublic' => 'bool'
        ];
    }

    /**
     * @return PostPayload
     */
    public function createPayload()
    {
        $payload = new PostPayload();

        $this->set($payload, 'title');
        $this->set($payload, 'publicMessage');
        $this->set($payload, 'privateMessage');
        $this->set($payload, 'clientName');
        $this->set($payload, 'clientPhone');
        $this->set($payload, 'noPersonalInfoInPublic', null, false);

        return $payload;
    }
}