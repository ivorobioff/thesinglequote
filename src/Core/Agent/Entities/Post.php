<?php
namespace ImmediateSolutions\Core\Agent\Entities;
use ImmediateSolutions\Core\Agent\Enums\Status;
use DateTime;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class Post
{
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
     * @var Status
     */
    private $status;
    public function setStatus(Status $status) { $this->status = $status; }
    public function getStatus() { return $this->status; }

    /**
     * @var string
     */
    private $title;
    public function setTitle($title) { $this->title = $title; }
    public function getTitle() { return $this->title; }

    /**
     * @var string
     */
    private $publicMessage;
    public function setPublicMessage($message) { $this->publicMessage = $message; }
    public function getPublicMessage() { return $this->publicMessage; }

    /**
     * @var string
     */
    private $privateMessage;
    public function setPrivateMessage($message) { $this->privateMessage = $message; }
    public function getPrivateMessage() { return $this->privateMessage; }

    /**
     * @var string
     */
    private $clientName;
    public function setClientName($name) { $this->clientName = $name; }
    public function getClientName() { return $this->clientName; }

    /**
     * @var string
     */
    private $clientPhone;
    public function setClientPhone($phone) { $this->clientPhone = $phone; }
    public function getClientPhone() { return $this->clientName; }

    /**
     * @var bool
     */
    private $noPersonalInfoInPublic = false;
    public function setNoPersonalInfoInPublic($flag) { $this->noPersonalInfoInPublic = $flag; }
    public function getNoPersonalInfoInPublic() { return $this->noPersonalInfoInPublic; }

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
        $this->setStatus(new Status(Status::OPEN));
        $this->setCreatedAt(new DateTime());
    }
}