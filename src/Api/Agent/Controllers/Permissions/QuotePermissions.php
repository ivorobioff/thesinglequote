<?php
namespace ImmediateSolutions\Api\Agent\Controllers\Permissions;
use ImmediateSolutions\Support\Permissions\AbstractActionsPermissions;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuotePermissions extends AbstractActionsPermissions
{
    /**
     * @return array
     */
    protected function permissions()
    {
        return [
            'show' => 'owner',
            'store' => 'owner',
            'update' => 'owner',
            'destroy' => 'owner'
        ];
    }
}