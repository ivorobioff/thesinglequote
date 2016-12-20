<?php
namespace ImmediateSolutions\Core\Agent\Validation\Rules;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Services\AgentService;
use ImmediateSolutions\Support\Validation\Error;
use ImmediateSolutions\Support\Validation\Rules\AbstractRule;
use ImmediateSolutions\Support\Validation\Value;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class InsuranceUnique extends AbstractRule
{
    /**
     * @var AgentService
     */
    private $agentService;

    /**
     * @var Agent
     */
    private $currentAgent;

    /**
     * @param AgentService $agentService
     * @param Agent $currentAgent
     */
    public function __construct(AgentService $agentService, Agent $currentAgent = null)
    {
        $this->agentService = $agentService;
        $this->currentAgent = $currentAgent;

        $this->setIdentifier('unique')
            ->setMessage('An agent with the provided insurance license number is already registered.');
    }

    /**
     * @param mixed|Value $value
     * @return Error|null
     */
    public function check($value)
    {
        if ($this->currentAgent && $this->currentAgent->getInsuranceLicenseNumber() === $value){
            return null;
        }

        if ($this->agentService->existsByInsuranceLicenseNumber($value)){
            return $this->getError();
        }

        return null;
    }
}