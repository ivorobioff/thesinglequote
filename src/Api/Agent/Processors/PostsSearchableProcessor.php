<?php
namespace ImmediateSolutions\Api\Agent\Processors;
use ImmediateSolutions\Api\Support\SearchableProcessor;
use ImmediateSolutions\Core\Agent\Services\ResponderService;
use ImmediateSolutions\Support\Api\Searchable\SortableTrait;
use ImmediateSolutions\Support\Core\Criteria\Sorting\Sortable;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostsSearchableProcessor extends SearchableProcessor
{
    use SortableTrait;

    /**
     * @param Sortable $sortable
     * @return bool
     */
    protected function isResolvable(Sortable $sortable)
    {
        /**
         * @var ResponderService $responder
         */
        $responder = $this->container->get(ResponderService::class);

        return $responder->canResolvePostSortable($sortable);
    }
}