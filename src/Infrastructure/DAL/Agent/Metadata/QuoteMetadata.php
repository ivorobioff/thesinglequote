<?php
namespace ImmediateSolutions\Infrastructure\DAL\Agent\Metadata;
use Doctrine\ORM\Mapping\Builder\ClassMetadataBuilder;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Core\Agent\Entities\Post;
use ImmediateSolutions\Core\Document\Entities\Document;
use ImmediateSolutions\Infrastructure\DAL\Agent\Types\PlanType;
use ImmediateSolutions\Infrastructure\Doctrine\Metadata\AbstractMetadataProvider;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuoteMetadata extends AbstractMetadataProvider
{
    /**
     * @param ClassMetadataBuilder $builder
     * @return void
     */
    public function define(ClassMetadataBuilder $builder)
    {
        $builder->setTable('quotes');

        $builder
            ->createField('id', 'integer')
            ->makePrimaryKey()
            ->generatedValue()
            ->build();


        $builder
            ->createField('price', 'float')
            ->build();

        $builder
            ->createField('plan', PlanType::class)
            ->build();

        $builder
            ->createField('commission', 'integer')
            ->build();


        $builder
            ->createField('isPicked', 'boolean')
            ->build();

        $builder
            ->createField('note', 'text')
            ->nullable(true)
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
            ->inversedBy('quotes')
            ->build();

        $builder
            ->createManyToOne('request', Post::class)
            ->addJoinColumn('request_id', 'id', true, false, 'CASCADE')
            ->build();

        $builder
            ->createOneToOne('document', Document::class)
            ->build();
    }
}