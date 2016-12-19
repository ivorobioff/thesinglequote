<?php
namespace ImmediateSolutions\Api\Agent\Controllers;
use ImmediateSolutions\Api\Agent\Processors\AgentsProcessor;
use ImmediateSolutions\Api\Agent\Serializers\AgentSerializer;
use ImmediateSolutions\Api\Support\Controller;
use ImmediateSolutions\Core\Agent\Services\AgentService;
use Psr\Http\Message\ResponseInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentsController extends Controller
{
    /**
     * @var AgentService
     */
    private $agentService;

    /**
     * @param AgentService $agentService
     */
    public function initialize(AgentService $agentService)
    {
        $this->agentService = $agentService;
    }

    /**
     * @param AgentsProcessor $processor
     * @return ResponseInterface
     */
    public function store(AgentsProcessor $processor)
    {
        return $this->reply->single(
            $this->agentService->create($processor->createPayload()),
            $this->serializer(AgentSerializer::class)
        );
    }
}