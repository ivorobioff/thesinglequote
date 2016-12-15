<?php
namespace ImmediateSolutions\Infrastructure\Doctrine\Metadata;

/**
 * @author Igor Vorobiov <igor.vorobioff@gmail.com>
 */
interface MetadataClassesProvidableInterface
{
	/**
	 * @return array
	 */
	public function getMetadataClasses();
}