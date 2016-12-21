<?php
namespace ImmediateSolutions\Api;
use ImmediateSolutions\Support\Api\VerifyMiddleware;
use ImmediateSolutions\Support\Framework\ActionMiddlewareRegisterInterface;
use ImmediateSolutions\Support\Framework\MiddlewarePipeline;
use ImmediateSolutions\Support\Permissions\PermissionsMiddleware;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class ActionMiddlewareRegister implements ActionMiddlewareRegisterInterface
{
    /**
     * @param MiddlewarePipeline $pipeline
     */
    public function register(MiddlewarePipeline $pipeline)
    {
        $pipeline->add(VerifyMiddleware::class);
        $pipeline->add(PermissionsMiddleware::class);
    }
}