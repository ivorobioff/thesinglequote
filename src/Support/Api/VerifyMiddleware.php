<?php
namespace ImmediateSolutions\Support\Api;
use ImmediateSolutions\Support\Framework\Action;
use ImmediateSolutions\Support\Framework\ActionMiddlewareInterface;
use ImmediateSolutions\Support\Framework\ContainerInterface;
use Psr\Http\Message\ResponseInterface;
use RuntimeException;
use ImmediateSolutions\Support\Framework\Exceptions\NotFoundHttpException;
/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class VerifyMiddleware implements ActionMiddlewareInterface
{
    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
    }

    /**
     * @param Action $action
     * @param callable $next
     * @return ResponseInterface
     */
    public function handle(Action $action, callable $next)
    {
        if ($this->shouldBypass($action)){
            return $next($action);
        }

        $arguments = $action->getArguments();
        $controller = $action->getController();

        if (!method_exists($controller, 'verify')){
            throw new RuntimeException('The "verify" method is missing even though the controller is verifiable.');
        }

        $result = $this->container->call([$controller, 'verify'], $arguments);

        if (!$result){
            throw new NotFoundHttpException();
        }

        return $next($action);
    }

    /**
     * @param Action $action
     * @return bool
     */
    private function shouldBypass(Action $action)
    {
        $arguments = $action->getArguments();

        if (!$arguments){
            return true;
        }

        $controller = $action->getController();

        if (!$controller instanceof VerifiableInterface){
            return true;
        }

        if ($controller->shouldVerify() === false){
            return true;
        }

        return false;

    }
}