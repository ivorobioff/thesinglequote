<?php
namespace ImmediateSolutions\Api;
use ImmediateSolutions\Api\Agent\Routes\AgentRoutes;
use ImmediateSolutions\Api\Document\Routes\DocumentRoutes;
use ImmediateSolutions\Api\Session\Routes\SessionRoutes;
use ImmediateSolutions\Support\Framework\RouteRegisterInterface;
use ImmediateSolutions\Support\Framework\RouterInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class RouteRegister implements RouteRegisterInterface
{
    /**
     * @param RouterInterface $router
     */
    public function register(RouterInterface $router)
    {
        $router->group('/api', function(RouterInterface $router){
            call_user_func(new SessionRoutes(), $router);
            call_user_func(new DocumentRoutes(), $router);
            call_user_func(new AgentRoutes(), $router);
        });
    }
}