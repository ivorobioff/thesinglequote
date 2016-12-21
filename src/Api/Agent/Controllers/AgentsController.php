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

    /**
     * @param int $agentId
     * @return ResponseInterface
     */
    public function show($agentId)
    {
        return $this->reply->single(
            $this->agentService->get($agentId),
            $this->serializer(AgentSerializer::class)
        );
    }

    /**
     * @param int $agentId
     * @param AgentsProcessor $processor
     * @return ResponseInterface
     */
    public function update($agentId, AgentsProcessor $processor)
    {
        $this->agentService->update($agentId, $processor->createPayload());

        return $this->reply->blank();
    }

    /**
     * @param int $agentId
     * @return ResponseInterface
     */
    public function destroy($agentId)
    {
        $this->agentService->delete($agentId);

        return $this->reply->blank();
    }

    /**
     * @param int $agentId
     * @return bool
     */
    public function verify($agentId)
    {
        return $this->agentService->exists($agentId);
    }
}