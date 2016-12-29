<?php
namespace ImmediateSolutions\Infrastructure;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
abstract class AbstractConfigProvider
{
    /**
     * @var array
     */
    private $parameters = [];


    public function __construct()
    {
        $file = APP_PATH . '/env.php';

        if (file_exists($file)) {
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