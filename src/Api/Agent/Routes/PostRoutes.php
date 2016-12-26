<?php
namespace ImmediateSolutions\Api\Agent\Routes;
use ImmediateSolutions\Api\Agent\Controllers\PostsController;
use ImmediateSolutions\Support\Framework\RouterInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostRoutes
{
    /**
     * @param RouterInterface $router
     */
    public function __invoke(RouterInterface $router)
    {
        $router->post('/agents/{agentId:\d+}/posts', PostsController::class.'@store');
        $router->patch('/agents/{agentId:\d+}/posts/{postId:\d+}', PostsController::class.'@update');
        $router->get('/agents/{agentId:\d+}/posts', PostsController::class.'@index');
        $router->get('/agents/requests', PostsController::class.'@requests');
        $router->delete('/agents/{agentId:\d+}/posts/{postId:\d+}', PostsController::class.'@destroy');
    }
}