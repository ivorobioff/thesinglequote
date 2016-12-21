<?php
namespace ImmediateSolutions\Core\Agent\Validation;
use ImmediateSolutions\Support\Validation\AbstractThrowableValidator;
use ImmediateSolutions\Support\Validation\Binder;
use ImmediateSolutions\Support\Validation\Property;
use ImmediateSolutions\Support\Validation\Rules\Blank;
use ImmediateSolutions\Support\Validation\Rules\Length;
use ImmediateSolutions\Support\Validation\Rules\Obligate;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class PostValidator extends AbstractThrowableValidator
{
    /**
     * @param Binder $binder
     * @return void
     */
    protected function define(Binder $binder)
    {
        $binder->bind('title', function(Property $property){
            $property
                ->addRule(new Obligate())
                ->addRule(new Blank())
                ->addRule(new Length(1, 255));
        });

        $binder->bind('publicMessage', function(Property $property){
            $property
                ->addRule(new Obligate())
                ->addRule(new Blank());
        });

        $binder->bind('privateMessage', function(Property $property){
            $property
                ->addRule(new Obligate())
                ->addRule(new Blank());
        });

        $binder->bind('clientName', function(Property $property){
            $property
                ->addRule(new Obligate())
                ->addRule(new Blank())
                ->addRule(new Length(1, 255));
        });

        $binder->bind('clientPhone', function(Property $property){
            $property
                ->addRule(new Obligate())
                ->addRule(new Blank())
                ->addRule(new Length(1, 255));
        });
    }
}