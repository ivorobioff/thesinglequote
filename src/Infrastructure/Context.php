<?php
namespace ImmediateSolutions\Infrastructure;
use ImmediateSolutions\Support\Framework\ContextInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class Context implements ContextInterface
{
    /**
     * @var ConfigInterface
     */
    private $config;

    /**
     * @param ConfigInterface $config
     */
    public function __construct(ConfigInterface $config)
    {
        $this->config = $config;
    }

    /**
     * @return bool
     */
    public function isDebug()
    {
        return $this->config->get('debug', false);
    }
}