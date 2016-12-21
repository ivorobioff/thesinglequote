<?php
namespace ImmediateSolutions\Infrastructure\DAL\Agent\Metadata;
use Doctrine\ORM\Mapping\Builder\ClassMetadataBuilder;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Infrastructure\Doctrine\Metadata\AbstractMetadataProvider;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostMetadata extends AbstractMetadataProvider
{
    /**
     * @param ClassMetadataBuilder $builder
     * @return void
     */
    public function define(ClassMetadataBuilder $builder)
    {
        $builder->setTable('agent_posts');

        $builder
            ->createField('id', 'integer')
            ->makePrimaryKey()
            ->generatedValue()
            ->build();

        $builder
            ->createField('title', 'string')
            ->build();

        $builder
            ->createField('publicMessage', 'text')
            ->build();

        $builder
            ->createField('privateMessage', 'text')
            ->build();

        $builder
            ->createField('clientName', 'string')
            ->build();


        $builder
            ->createField('clientPhone', 'string')
            ->build();

        $builder
            ->createField('createdAt', 'datetime')
            ->build();

        $builder
            ->createField('updatedAt', 'datetime')
            ->build();

        $builder
            ->createManyToOne('agent', Agent::class)
            ->addJoinColumn('agent_id', 'id', true, false, 'CASCADE')
            ->build();
    }
}