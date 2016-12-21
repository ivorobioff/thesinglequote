<?php
namespace ImmediateSolutions\Api\Agent\Routes;
use ImmediateSolutions\Api\Agent\Controllers\AgentsController;
use ImmediateSolutions\Support\Framework\RouterInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentRoutes
{
    public function __invoke(RouterInterface $router)
    {
        $router->post('/agents', AgentsController::class.'@store');
        $router->get('/agents/{agentId:\d+}', AgentsController::class.'@show');
        $router->patch('/agents/{agentId:\d+}', AgentsController::class.'@update');
        $router->delete('/agents/{agentId:\d+}', AgentsController::class.'@destroy');
    }
}