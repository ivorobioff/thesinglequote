<?php
namespace ImmediateSolutions\Core\Agent\Criteria;
use Doctrine\ORM\QueryBuilder;
use ImmediateSolutions\Support\Core\Criteria\Sorting\AbstractResolver;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostSorterResolver extends AbstractResolver
{
    /**
     * @param QueryBuilder $builder
     * @param string $direction
     */
    public function byId(QueryBuilder $builder, $direction)
    {
        $builder->addOrderBy('p.id', $direction);
    }
}