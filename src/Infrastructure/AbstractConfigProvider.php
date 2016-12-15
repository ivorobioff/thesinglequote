<?php
namespace ImmediateSolutions\Infrastructure;
use ImmediateSolutions\Support\Framework\EnvironmentInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
abstract class AbstractConfigProvider
{
    /**
     * @var EnvironmentInterface
     */
    protected $environment;

    /**
     * @var array
     */
    private $parameters = [];

    /**
     * @param EnvironmentInterface $environment
     */
    public function __construct(EnvironmentInterface $environment)
    {
        $this->environment = $environment;

        if ($environment->isDevelopment()){
            $file = APP_PATH.'/dev.env.php';
        } else {
            $file = APP_PATH.'/env.php';
        }

        if (file_exists($file)){
            $this->parameters = require $file;
        }
    }

    /**
     * @param string $key
     * @param mixed $default
     * @return mixed
     */
    protected function parameter($key, $default = null)
    {
        return array_get($this->parameters, $key, $default);
    }
}