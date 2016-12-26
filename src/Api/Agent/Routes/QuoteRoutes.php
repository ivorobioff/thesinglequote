<?php
namespace ImmediateSolutions\Api\Agent\Routes;
use ImmediateSolutions\Api\Agent\Controllers\QuoteController;
use ImmediateSolutions\Support\Framework\RouterInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuoteRoutes
{
    public function __invoke(RouterInterface $router)
    {
        $router->get('/agents/{agentId:\d+}/requests/{requestId:\d+}/quote', QuoteController::class.'@show');
        $router->post('/agents/{agentId:\d+}/requests/{requestId:\d+}/quote', QuoteController::class.'@store');
        $router->patch('/agents/{agentId:\d+}/requests/{requestId:\d+}/quote', QuoteController::class.'@update');
        $router->delete('/agents/{agentId:\d+}/requests/{requestId:\d+}/quote', QuoteController::class.'@destroy');
    }
}