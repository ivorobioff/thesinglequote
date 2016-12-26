<?php
namespace ImmediateSolutions\Infrastructure\DAL\Agent\Types;
use ImmediateSolutions\Core\Agent\Enums\Plan;
use ImmediateSolutions\Infrastructure\Doctrine\EnumType;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PlanType extends EnumType
{
    /**
     * @return string
     */
    protected function getEnumClass()
    {
        return Plan::class;
    }
}