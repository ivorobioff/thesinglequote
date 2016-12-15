<?php
namespace ImmediateSolutions\Infrastructure\DAL\User\Metadata;

use Doctrine\ORM\Mapping\Builder\ClassMetadataBuilder;
use ImmediateSolutions\Core\Agent\Entities\Agent;
use ImmediateSolutions\Infrastructure\Doctrine\Metadata\AbstractMetadataProvider;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class UserMetadata extends AbstractMetadataProvider
{
    /**
     * @param ClassMetadataBuilder $builder
     * @return void
     */
    public function define(ClassMetadataBuilder $builder)
    {
        $builder
            ->setTable('users')
            ->setSingleTableInheritance()
            ->setDiscriminatorColumn('type', 'string', 20)
            ->addDiscriminatorMapClass('agent', Agent::class);

        $builder
            ->createField('id', 'integer')
            ->makePrimaryKey()
            ->generatedValue()
            ->build();

        $builder
            ->createField('username', 'string')
            ->unique()
            ->build();

        $builder
            ->createField('password', 'string')
            ->build();

        $builder
            ->createField('createdAt', 'datetime')
            ->build();
    }
}