<?php
namespace ImmediateSolutions\Core\Agent\Entities;
use ImmediateSolutions\Core\Agent\Enums\Plan;
use DateTime;
use ImmediateSolutions\Core\Document\Entities\Document;
use ImmediateSolutions\Core\Document\Support\DocumentUsageManagementTrait;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class Quote
{
    use DocumentUsageManagementTrait;

    private $id;
    public function setId($id) { $this->id = $id; }
    public function getId() { return $this->id; }

    /**
     * @var Agent
     */
    private $owner;
    public function setOwner(Agent $owner) { $this->owner = $owner; }
    public function getOwner() { return $this->owner; }

    /**
     * @var Post
     */
    private $request;
    public function setRequest(Post $request) { $this->request = $request; }
    public function getRequest() { return $this->request; }

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
     * @var Document
     */
    private $document;
    public function getDocument() { return $this->document; }

    /**
     * @param Document $document
     */
    public function setDocument(Document $document = null)
    {
        $this->handleUsageOfOneDocument($this->getDocument(), $document);

        $this->document = $document;
    }

    private $isPicked = false;
    public function setPicked($flag) { $this->isPicked = $flag; }
    public function isPicked() { return $this->isPicked; }

    /**
     * @var DateTime
     */
    private $createdAt;
    public function setCreatedAt(DateTime $datetime) { $this->createdAt = $datetime; }
    public function getCreatedAt() { return $this->createdAt; }

    /**
     * @var DateTime
     */
    private $updatedAt;
    public function setUpdatedAt(DateTime $datetime) { $this->updatedAt = $datetime; }
    public function getUpdatedAt() { return $this->updatedAt; }

    public function __construct()
    {
        $this->setCreatedAt(new DateTime());
    }
}