<?php
namespace ImmediateSolutions\Core\Agent\Services;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Entities\Post;
use ImmediateSolutions\Core\Agent\Payloads\AgentPayload;
use ImmediateSolutions\Core\Agent\Validation\AgentValidator;
use ImmediateSolutions\Core\Support\Service;
use ImmediateSolutions\Core\User\Interfaces\PasswordEncryptorInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentService extends Service
{
    /**
     * @param int $id
     * @return Agent
     */
    public function get($id)
    {
        return $this->entityManager->find(Agent::class, $id);
    }

    /**
     * @param AgentPayload $payload
     * @return Agent
     */
    public function create(AgentPayload $payload)
    {
        (new AgentValidator($this->container))->validate($payload);

        $agent = new Agent();

        $this->exchange($payload, $agent);

        $this->entityManager->persist($agent);
        $this->entityManager->flush();

        return $agent;
    }

    /**
     * @param int $id
     * @param AgentPayload $payload
     */
    public function update($id, AgentPayload $payload)
    {
        /**
         * @var Agent $agent
         */
        $agent = $this->entityManager->find(Agent::class, $id);

        (new AgentValidator($this->container, $agent))->validate($payload, true);

        $this->exchange($payload, $agent);

        $this->entityManager->flush();
    }

    /**
     * @param AgentPayload $payload
     * @param Agent $agent
     */
    private function exchange(AgentPayload $payload, Agent $agent)
    {
        $this->transfer($payload, $agent, 'email');
        $this->transfer($payload, $agent, 'fullName');

        $this->transfer($payload, $agent, 'password', function($password){
            /**
             * @var PasswordEncryptorInterface $encrypter
             */
            $encrypter = $this->container->get(PasswordEncryptorInterface::class);

            return $encrypter->encrypt($password);
        });

        $this->transfer($payload, $agent, 'insuranceLicenseNumber');
    }

    /**
     * @param int $id
     */
    public function delete($id)
    {
        $this->entityManager->getRepository(Agent::class)->delete(['id' => $id]);
    }

    /**
     * @param int $id
     * @return bool
     */
    public function exists($id)
    {
        return $this->entityManager
            ->getRepository(Agent::class)
            ->exists(['id' => $id]);
    }

    /**
     * @param string $number
     * @return bool
     */
    public function existsByInsuranceLicenseNumber($number)
    {
        return $this->entityManager->getRepository(Agent::class)->exists([
            'insuranceLicenseNumber' => $number
        ]);
    }

    /**
     * @param int $agentId
     * @param int $postId
     * @return bool
     */
    public function hasPost($agentId, $postId)
    {
        return $this->entityManager
            ->getRepository(Post::class)
            ->exists(['id' => $postId, 'agent' => $agentId]);
    }
}