<?php
namespace ImmediateSolutions\Api\Support;

use ImmediateSolutions\Support\Api\AbstractController;
use ImmediateSolutions\Support\Framework\ContainerInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
abstract class Controller extends AbstractController
{
    /**
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        parent::__construct($container);
    }
}