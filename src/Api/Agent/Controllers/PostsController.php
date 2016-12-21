<?php
namespace ImmediateSolutions\Api\Agent\Controllers;
use ImmediateSolutions\Api\Agent\Processors\PostsProcessor;
use ImmediateSolutions\Api\Agent\Serializers\PostSerializer;
use ImmediateSolutions\Api\Support\Controller;
use ImmediateSolutions\Core\Agent\Options\FetchPostsOptions;
use ImmediateSolutions\Core\Agent\Services\AgentService;
use ImmediateSolutions\Core\Agent\Services\PostService;
use ImmediateSolutions\Core\Session\Entities\Session;
use ImmediateSolutions\Support\Api\DefaultPaginatorAdapter;
use ImmediateSolutions\Support\Core\Options\PaginationOptions;
use Psr\Http\Message\ResponseInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostsController extends Controller
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
     * @param int $agentId
     * @param PostsProcessor $processor
     * @return ResponseInterface
     */
    public function store($agentId, PostsProcessor $processor)
    {
        return $this->reply->single(
            $this->postService->create($agentId, $processor->createPayload()),
            $this->serializer(PostSerializer::class)
        );
    }

    /**
     * @param int $agentId
     * @param int $postId
     * @param PostsProcessor $processor
     * @return ResponseInterface
     */
    public function update($agentId, $postId, PostsProcessor $processor)
    {
        $this->postService->update($postId, $processor->createPayload());

        return $this->reply->blank();
    }

    /**
     * @param int $agentId
     * @return ResponseInterface
     */
    public function index($agentId)
    {
        $options = new FetchPostsOptions();

        $adapter = new DefaultPaginatorAdapter([
            'getAll' => function($page, $perPage) use ($agentId, $options){

                $options->setPagination(new PaginationOptions($page, $perPage));

                return $this->postService->getAll($agentId, $options);
            },
            'getTotal' => function() use ($agentId){
                return $this->postService->getTotal($agentId);
            }
        ]);

        return $this->reply->collection($this->paginator($adapter), $this->serializer(PostSerializer::class));
    }


    /**
     * @return ResponseInterface
     */
    public function all()
    {
        $options = new FetchPostsOptions();
        $options->setInverted(true);

        /**
         * @var Session $session
         */
        $session = $this->container->get(Session::class);

        $agentId = $session->getUser()->getId();

        $adapter = new DefaultPaginatorAdapter([
            'getAll' => function($page, $perPage) use ($agentId, $options){

                $options->setPagination(new PaginationOptions($page, $perPage));

                return $this->postService->getAll($agentId, $options);
            },
            'getTotal' => function() use ($agentId, $options){
                return $this->postService->getTotal($agentId, $options);
            }
        ]);

        return $this->reply->collection($this->paginator($adapter), $this->serializer(PostSerializer::class));

    }

    /**
     * @param int $agentId
     * @param int $postId
     * @return ResponseInterface
     */
    public function destroy($agentId, $postId)
    {
        $this->postService->delete($postId);

        return $this->reply->blank();
    }


    /**
     * @param AgentService $agentService
     * @param int $agentId
     * @param int $postId
     * @return bool
     */
    public function verify(AgentService $agentService, $agentId, $postId = null)
    {
        if ($postId === null){
            return $agentService->exists($agentId);
        }

        return $agentService->hasPost($agentId, $postId);
    }
}