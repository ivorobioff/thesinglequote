<?php
namespace ImmediateSolutions\Api\Agent\Controllers;
use ImmediateSolutions\Api\Agent\Processors\QuoteProcessor;
use ImmediateSolutions\Api\Agent\Serializers\QuoteSerializer;
use ImmediateSolutions\Api\Support\Controller;
use ImmediateSolutions\Core\Agent\Services\AgentService;
use ImmediateSolutions\Core\Agent\Services\QuoteService;
use ImmediateSolutions\Support\Framework\Exceptions\NotFoundHttpException;
use Psr\Http\Message\ResponseInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuoteController extends Controller
{
    /**
     * @var QuoteService
     */
    private $quoteService;

    /**
     * @param QuoteService $quoteService
     */
    public function initialize(QuoteService $quoteService)
    {
        $this->quoteService = $quoteService;
    }

    /**
     * @param int $agentId
     * @param int $requestId
     * @return ResponseInterface
     */
    public function show($agentId, $requestId)
    {
        $quote = $this->quoteService->getByRequestAndOwnerId($requestId, $agentId);

        if ($quote === null){
            throw new NotFoundHttpException();
        }

        return $this->reply->single($quote, $this->serializer(QuoteSerializer::class));
    }

    /**
     * @param QuoteProcessor $processor
     * @param int $agentId
     * @param int $requestId
     * @return ResponseInterface
     */
    public function store(QuoteProcessor $processor, $agentId, $requestId)
    {
        return $this->reply->single(
            $this->quoteService->create($requestId, $agentId, $processor->createPayload()),
            $this->serializer(QuoteSerializer::class)
        );
    }

    /**
     * @param QuoteProcessor $processor
     * @param int $agentId
     * @param int $requestId
     * @return ResponseInterface
     */
    public function update(QuoteProcessor $processor, $agentId, $requestId)
    {
        $this->quoteService->updateByRequestAndOwnerId($requestId, $agentId, $processor->createPayload());

        return $this->reply->blank();
    }

    /**
     * @param int $agentId
     * @param int $requestId
     * @return ResponseInterface
     */
    public function destroy($agentId, $requestId)
    {
        $this->quoteService->deleteByRequestAndOwnerId($requestId, $agentId);

        return $this->reply->blank();
    }

    /**
     * @param AgentService $agentService
     * @param int $agentId
     * @param int $requestId
     * @return bool
     */
    public function verify(AgentService $agentService, $agentId, $requestId)
    {
        return $agentService->hasRequest($agentId, $requestId);
    }
}