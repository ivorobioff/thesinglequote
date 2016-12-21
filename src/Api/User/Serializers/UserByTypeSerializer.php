<?php
namespace ImmediateSolutions\Api\User\Serializers;
use ImmediateSolutions\Api\Agent\Serializers\AgentSerializer;
use ImmediateSolutions\Api\Support\Serializer;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\User\Entities\User;
use RuntimeException;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class UserByTypeSerializer extends Serializer
{
    public function __invoke(User $user)
    {
        if ($user instanceof Agent){

            $data = $this->delegate(AgentSerializer::class, $user);
            $data['type'] = 'agent';

            return $data;
        }

        throw new RuntimeException('Unable to find a serializer for the "'.get_class($user).'" type.');
    }
}