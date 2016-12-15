<?php
namespace ImmediateSolutions\Infrastructure\DAL\Agent\Metadata;
use Doctrine\ORM\Mapping\Builder\ClassMetadataBuilder;
use ImmediateSolutions\Infrastructure\Doctrine\Metadata\AbstractMetadataProvider;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentMetadata extends AbstractMetadataProvider
{
    /**
     * @param ClassMetadataBuilder $builder
     * @return void
     */
    public function define(ClassMetadataBuilder $builder)
    {
        $builder
            ->createField('email', 'string')
            ->unique()
            ->build();

        $builder
            ->createField('fullName', 'string')
            ->build();
    }
}