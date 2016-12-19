<?php
namespace ImmediateSolutions\Core\Agent\Validation;
use ImmediateSolutions\Core\User\Services\UserService;
use ImmediateSolutions\Core\User\Validation\Rules\Unique;
use ImmediateSolutions\Support\Validation\AbstractThrowableValidator;
use ImmediateSolutions\Support\Validation\Binder;
use ImmediateSolutions\Support\Validation\Property;
use ImmediateSolutions\Support\Validation\Rules\Blank;
use ImmediateSolutions\Support\Validation\Rules\Email;
use ImmediateSolutions\Support\Validation\Rules\Length;
use ImmediateSolutions\Support\Validation\Rules\Obligate;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class AgentValidator extends AbstractThrowableValidator
{
    /**
     * @var UserService
     */
    private $userService;

    /**
     * @param UserService $userService
     */
    public function __construct(UserService $userService)
    {
        $this->userService = $userService;
    }

    /**
     * @param Binder $binder
     * @return void
     */
    protected function define(Binder $binder)
    {
        $binder->bind('email', function(Property $property){
            $property
                ->addRule(new Obligate())
                ->addRule(new Email())
                ->addRule((new Unique($this->userService))
                    ->setMessage('An agent with this email address is already registered.'));
        });

        $binder->bind('password', function(Property $property){
            $property
                ->addRule(new Obligate())
                ->addRule(new Length(6));
        });

        $binder->bind('fullName', function(Property $property){
            $property
                ->addRule(new Obligate())
                ->addRule(new Blank())
                ->addRule(new Length(0, 255));
        });
    }
}