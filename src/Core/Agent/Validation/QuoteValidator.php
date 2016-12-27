<?php
namespace ImmediateSolutions\Core\Agent\Validation;
use ImmediateSolutions\Core\Agent\Entities\Quote;
use ImmediateSolutions\Core\Document\Validation\Inflators\DocumentInflator;
use ImmediateSolutions\Support\Framework\ContainerInterface;
use ImmediateSolutions\Support\Validation\AbstractThrowableValidator;
use ImmediateSolutions\Support\Validation\Binder;
use ImmediateSolutions\Support\Validation\Property;
use ImmediateSolutions\Support\Validation\Rules\Blank;
use ImmediateSolutions\Support\Validation\Rules\Greater;
use ImmediateSolutions\Support\Validation\Rules\Length;
use ImmediateSolutions\Support\Validation\Rules\Less;
use ImmediateSolutions\Support\Validation\Rules\Obligate;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class QuoteValidator extends AbstractThrowableValidator
{
    /**
     * @var ContainerInterface
     */
    private $container;

    /**
     * @var Quote
     */
    private $currentQuote;

    /**
     * @param ContainerInterface $container
     * @param Quote $currentQuote
     */
    public function __construct(ContainerInterface $container, Quote $currentQuote = null)
    {
        $this->container = $container;
        $this->currentQuote = $currentQuote;
    }

    /**
     * @param Binder $binder
     * @return void
     */
    protected function define(Binder $binder)
    {
        $binder
            ->bind('price', function(Property $property){
                $property
                    ->addRule(new Obligate())
                    ->addRule(new Greater(0));
            });

        $binder
            ->bind('plan', function(Property $property){
                $property
                    ->addRule(new Obligate());
            });

        $binder
            ->bind('commission', function(Property $property){
                $property
                    ->addRule(new Obligate())
                    ->addRule(new Greater(0))
                    ->addRule(new Less(100));
            });

        $binder
            ->bind('note', function(Property $property){
                $property
                    ->addRule(new Blank())
                    ->addRule(new Length(0, 1024));
            });

        $documentInflator = new DocumentInflator($this->container);
        $documentInflator->setRequired(true);

        if ($this->currentQuote){
            $documentInflator->setTrustedDocuments([$this->currentQuote->getDocument()]);
        }

        $binder->bind('document', $documentInflator);
    }
}