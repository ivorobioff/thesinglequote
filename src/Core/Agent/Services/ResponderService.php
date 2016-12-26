<?php
namespace ImmediateSolutions\Core\Agent\Services;
use ImmediateSolutions\Core\Agent\Criteria\PostSorterResolver;
use ImmediateSolutions\Support\Core\Criteria\Sorting\Sortable;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class ResponderService
{
    /**
     * @param Sortable $sortable
     * @return bool
     */
    public function canResolvePostSortable(Sortable $sortable)
    {
        return (new PostSorterResolver())->canResolve($sortable);
    }
}