<?php
namespace ImmediateSolutions\Api\Agent\Controllers;
use ImmediateSolutions\Api\Agent\Serializers\QuoteSerializer;
use ImmediateSolutions\Api\Support\Controller;
use ImmediateSolutions\Core\Agent\Services\AgentService;
use ImmediateSolutions\Core\Agent\Services\PostService;
use ImmediateSolutions\Core\Agent\Services\QuoteService;
use Psr\Http\Message\ResponseInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuotesController extends Controller
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
     * @param $agentId
     * @param $postId
     * @return ResponseInterface
     */
    public function index($agentId, $postId)
    {
        return $this->reply->collection(
            $this->quoteService->getAll($postId),
            $this->serializer(QuoteSerializer::class)
        );
    }

    /**
     * @param int $agentId
     * @param int $postId
     * @param int $quoteId
     * @return ResponseInterface
     */
    public function pick($agentId, $postId, $quoteId)
    {
        $this->quoteService->pick($quoteId);

        return $this->reply->blank();
    }

    /**
     * @param int $agentId
     * @param int $postId
     * @param int $quoteId
     * @return ResponseInterface
     */
    public function unpick($agentId, $postId, $quoteId)
    {
        $this->quoteService->unpick($quoteId);

        return $this->reply->blank();
    }

    /**
     * @param AgentService $agentService
     * @param PostService $postService
     * @param int $agentId
     * @param int $postId
     * @param int $quoteId
     * @return bool
     */
    public function verify(AgentService $agentService, PostService $postService, $agentId, $postId, $quoteId = null)
    {
        if (!$agentService->hasPost($agentId, $postId)){
            return false;
        }

        if ($quoteId === null){
            return true;
        }

        return $postService->hasQuote($postId, $quoteId);
    }
}