<?php
namespace ImmediateSolutions\Core\Agent\Entities;
use ImmediateSolutions\Core\User\Entities\User;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class Agent extends User
{
    /**
     * @var string
     */
    private $email;
    public function getEmail() { return $this->email; }

    public function setEmail($email)
    {
        $this->email = $email;
        $this->setUsername($email);
    }

    /**
     * @var string
     */
    private $fullName;
    public function setFullName($fullName) { $this->fullName = $fullName; }
    public function getFullName() { return $this->fullName; }
}