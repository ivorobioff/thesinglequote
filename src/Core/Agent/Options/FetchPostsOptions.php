<?php
namespace ImmediateSolutions\Core\Agent\Options;
use ImmediateSolutions\Support\Core\Options\PaginationAwareTrait;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class FetchPostsOptions
{
    use PaginationAwareTrait;

    private $isInverted = false;
    public function setInverted($flag) { $this->isInverted = $flag; }
    public function isInverted() { return $this->isInverted; }
}