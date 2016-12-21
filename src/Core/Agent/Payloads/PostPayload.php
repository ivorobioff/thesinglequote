<?php
namespace ImmediateSolutions\Core\Agent\Payloads;
use ImmediateSolutions\Support\Core\Validation\ClearableAwareTrait;
use ImmediateSolutions\Support\Validation\Source\ClearableAwareInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostPayload implements ClearableAwareInterface
{
    use ClearableAwareTrait;

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
    private $noPersonalInfoInPublic;
    public function setNoPersonalInfoInPublic($flag) { $this->noPersonalInfoInPublic = $flag; }
    public function getNoPersonalInfoInPublic() { return $this->noPersonalInfoInPublic; }
}