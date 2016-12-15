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
    public function setEmail($email) { $this->email = $email; }
    public function getEmail() { return $this->email; }

    /**
     * @var string
     */
    private $firstName;
    public function setFirstName($firstName) { $this->firstName = $firstName; }
    public function getFirstName() { return $this->firstName; }

    /**
     * @var string
     */
    private $lastName;
    public function setLastName($lastName) { $this->lastName = $lastName; }
    public function getLastName() { return $this->lastName; }
}