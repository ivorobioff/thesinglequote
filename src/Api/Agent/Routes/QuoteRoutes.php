<?php
namespace ImmediateSolutions\Api\Agent\Routes;
use ImmediateSolutions\Api\Agent\Controllers\QuoteController;
use ImmediateSolutions\Api\Agent\Controllers\QuotesController;
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

        $router->get('/agents/{agentId:\d+}/posts/{postId:\d+}/quotes', QuotesController::class.'@index');
        $router->post('/agents/{agentId:\d+}/posts/{postId:\d+}/quotes/{quoteId:\d+}/pick', QuotesController::class.'@pick');
        $router->post('/agents/{agentId:\d+}/posts/{postId:\d+}/quotes/{quoteId:\d+}/unpick', QuotesController::class.'@unpick');
    }
}