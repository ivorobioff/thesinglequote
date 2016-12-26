<?php
namespace ImmediateSolutions\Core\Agent\Options;
use ImmediateSolutions\Support\Core\Options\PaginationAwareTrait;
use ImmediateSolutions\Support\Core\Options\SortablesAwareTrait;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class FetchPostsOptions
{
    use PaginationAwareTrait;
    use SortablesAwareTrait;

    private $isInverted = false;
    public function setInverted($flag) { $this->isInverted = $flag; }
    public function isInverted() { return $this->isInverted; }
}