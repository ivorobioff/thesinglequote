<?php
namespace ImmediateSolutions\Infrastructure\DAL\Agent\Metadata;
use Doctrine\ORM\Mapping\Builder\ClassMetadataBuilder;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Entities\Quote;
use ImmediateSolutions\Infrastructure\DAL\Agent\Types\StatusType;
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
        $builder->setTable('posts');

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
            ->createField('status', StatusType::class)
            ->build();

        $builder
            ->createField('noPersonalInfoInPublic', 'boolean')
            ->build();

        $builder
            ->createField('createdAt', 'datetime')
            ->build();

        $builder
            ->createField('updatedAt', 'datetime')
            ->nullable(true)
            ->build();

        $builder
            ->createManyToOne('owner', Agent::class)
            ->addJoinColumn('owner_id', 'id', true, false, 'CASCADE')
            ->build();

        $builder
            ->createOneToMany('quotes', Quote::class)
            ->mappedBy('request')
            ->build();
    }
}