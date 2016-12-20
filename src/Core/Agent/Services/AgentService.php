<?php
namespace ImmediateSolutions\Core\Agent\Services;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Payloads\AgentPayload;
use ImmediateSolutions\Core\Agent\Validation\AgentValidator;
use ImmediateSolutions\Core\Support\Service;
use ImmediateSolutions\Core\User\Interfaces\PasswordEncryptorInterface;
use ImmediateSolutions\Core\User\Services\UserService;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentService extends Service
{
    /**
     * @param AgentPayload $payload
     * @return Agent
     */
    public function create(AgentPayload $payload)
    {
        (new AgentValidator($this->container))->validate($payload);

        $agent = new Agent();

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

        $this->entityManager->persist($agent);
        $this->entityManager->flush();

        return $agent;
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
}