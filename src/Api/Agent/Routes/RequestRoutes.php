<?php
namespace ImmediateSolutions\Api\Agent\Routes;
use ImmediateSolutions\Api\Agent\Controllers\RequestsController;
use ImmediateSolutions\Support\Framework\RouterInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class RequestRoutes
{
    public function __invoke(RouterInterface $router)
    {
        $router->get('/agents/{agentId:\d+}/requests', RequestsController::class.'@index');
    }
}