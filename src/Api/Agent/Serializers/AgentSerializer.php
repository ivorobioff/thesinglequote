<?php
namespace ImmediateSolutions\Api\Agent\Serializers;
use ImmediateSolutions\Api\Support\Serializer;
use ImmediateSolutions\Core\Agent\Entities\Agent;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentSerializer extends Serializer
{
    /**
     * @param Agent $agent
     * @return array
     */
    public function __invoke(Agent $agent)
    {
        return [
            'id' => $agent->getUsername(),
            'username' => $agent->getUsername(),
            'email' => $agent->getEmail(),
            'fullName' => $agent->getFullName()
        ];
    }
}