<?php
namespace ImmediateSolutions\Core\Agent\Payloads;

use ImmediateSolutions\Support\Core\Validation\ClearableAwareTrait;
use ImmediateSolutions\Support\Validation\Source\ClearableAwareInterface;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentPayload implements ClearableAwareInterface
{
    use ClearableAwareTrait;

    /**
     * @var string
     */
    private $email;
    public function setEmail($email) { $this->email = $email; }
    public function getEmail() { return $this->email; }

    /**
     * @var string
     */
    private $password;
    public function setPassword($password) { $this->password = $password; }
    public function getPassword() { return $this->password; }

    /**
     * @var string
     */
    private $fullName;
    public function setFullName($fullName) { $this->fullName = $fullName; }
    public function getFullName() { return $this->fullName; }
}