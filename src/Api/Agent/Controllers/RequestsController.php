<?php
namespace ImmediateSolutions\Api\Agent\Controllers;
use ImmediateSolutions\Api\Agent\Processors\PostsSearchableProcessor;
use ImmediateSolutions\Api\Agent\Serializers\PostSerializer;
use ImmediateSolutions\Api\Support\Controller;
use ImmediateSolutions\Core\Agent\Options\FetchPostsOptions;
use ImmediateSolutions\Core\Agent\Services\AgentService;
use ImmediateSolutions\Core\Agent\Services\PostService;
use ImmediateSolutions\Support\Api\DefaultPaginatorAdapter;
use ImmediateSolutions\Support\Core\Options\PaginationOptions;
use Psr\Http\Message\ResponseInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class RequestsController extends Controller
{
    /**
     * @var PostService
     */
    private $postService;

    /**
     * @param PostService $postService
     */
    public function initialize(PostService $postService)
    {
        $this->postService = $postService;
    }


    /**
     * @param  PostsSearchableProcessor $processor
     * @param int $agentId
     * @return ResponseInterface
     */
    public function index(PostsSearchableProcessor $processor, $agentId)
    {
        $adapter = new DefaultPaginatorAdapter([
            'getAll' => function($page, $perPage) use ($agentId, $processor){

                $options = new FetchPostsOptions();
                $options->setSortables($processor->createSortables());

                $options->setPagination(new PaginationOptions($page, $perPage));

                return $this->postService->getAllRequests($agentId, $options);
            },
            'getTotal' => function() use ($agentId){
                return $this->postService->getTotalRequests($agentId);
            }
        ]);

        return $this->reply->collection($this->paginator($adapter), $this->serializer(PostSerializer::class));
    }

    /**
     * @param AgentService $agentService
     * @param int $agentId
     * @return bool
     */
    public function verify(AgentService $agentService, $agentId)
    {
        return $agentService->exists($agentId);
    }
}