<?php
namespace ImmediateSolutions\Support\Api;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
interface VerifiableInterface
{
    /**
     * @return bool
     */
    public function shouldVerify();
}