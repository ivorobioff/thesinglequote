<?php
namespace ImmediateSolutions\Api\Agent\Controllers\Permissions;
use ImmediateSolutions\Support\Permissions\AbstractActionsPermissions;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostsPermissions extends AbstractActionsPermissions
{
    /**
     * @return array
     */
    protected function permissions()
    {
        return [
            'store' => 'owner',
            'update' => 'owner',
            'index' => 'owner',
            'requests' => 'auth',
            'destroy' => 'owner'
        ];
    }
}