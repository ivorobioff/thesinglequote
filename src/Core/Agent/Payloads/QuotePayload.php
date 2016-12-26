<?php
namespace ImmediateSolutions\Core\Agent\Payloads;
use ImmediateSolutions\Core\Agent\Enums\Plan;
use ImmediateSolutions\Core\Document\Payloads\IdentifierPayload;
use ImmediateSolutions\Support\Core\Validation\ClearableAwareTrait;
use ImmediateSolutions\Support\Validation\Source\ClearableAwareInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuotePayload implements ClearableAwareInterface
{
    use ClearableAwareTrait;

    /**
     * @var float
     */
    private $price;
    public function setPrice($price) { $this->price = $price; }
    public function getPrice(){ return $this->price; }

    /**
     * @var Plan
     */
    private $plan;
    public function setPlan(Plan $plan) { $this->plan = $plan; }
    public function getPlan() { return $this->plan; }

    /**
     * @var string
     */
    private $note;
    public function setNote($note) { $this->note = $note; }
    public function getNote() { return $this->note; }

    /**
     * @var int
     */
    private $commission;
    public function setCommission($commission) { $this->commission = $commission; }
    public function getCommission() { return $this->commission; }

    /**
     * @var IdentifierPayload
     */
    private $document;
    public function setDocument(IdentifierPayload $identifier) { $this->document = $identifier; }
    public function getDocument() { return $this->document; }
}