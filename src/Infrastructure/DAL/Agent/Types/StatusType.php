<?php
namespace ImmediateSolutions\Infrastructure\DAL\Agent\Types;
use ImmediateSolutions\Core\Agent\Enums\Status;
use ImmediateSolutions\Infrastructure\Doctrine\EnumType;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class StatusType extends EnumType
{
    /**
     * @return string
     */
    protected function getEnumClass()
    {
        return Status::class;
    }
}