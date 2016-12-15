<?php
namespace ImmediateSolutions\Support\Api;
use ImmediateSolutions\Support\Framework\ContainerInterface;
use ImmediateSolutions\Support\Api\Validation\Rules\DocumentMixedIdentifier;
use ImmediateSolutions\Support\Validation\Binder;
use ImmediateSolutions\Support\Validation\ErrorsThrowableCollection;
use ImmediateSolutions\Support\Validation\Performer;
use ImmediateSolutions\Support\Validation\Property;
use ImmediateSolutions\Support\Validation\RuleInterface;
use ImmediateSolutions\Support\Validation\Rules\BooleanCast;
use ImmediateSolutions\Support\Validation\Rules\Callback;
use ImmediateSolutions\Support\Validation\Rules\Each;
use ImmediateSolutions\Support\Validation\Rules\FloatCast;
use ImmediateSolutions\Support\Validation\Rules\IntegerCast;
use ImmediateSolutions\Support\Validation\Rules\Moment;
use ImmediateSolutions\Support\Validation\Rules\StringCast;
use ImmediateSolutions\Support\Validation\Rules\Walk;
use ImmediateSolutions\Support\Validation\Source\ArraySourceHandler;
use ImmediateSolutions\Support\Validation\Source\ClearableAwareInterface;
use Psr\Http\Message\ServerRequestInterface;
use RuntimeException;
use Symfony\Component\PropertyAccess\PropertyAccess;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
abstract class AbstractProcessor
{
    /**
     * @var ServerRequestInterface
     */
    protected $request;

    /**
     * @var ContainerInterface
     */
    protected $container;

    /**
     * @var array
     */
    private $data;

    /**
     * @var ErrorsThrowableCollection
     */
    private $errors;

    /**
     * @param ContainerInterface $container
     */
    public function __construct(ContainerInterface $container)
    {
        $this->container = $container;
        $this->request = $container->get(ServerRequestInterface::class);
    }

    /**
     * @param string $path
     * @param mixed $default
     * @return mixed
     */
    protected function get($path, $default = null)
    {
        return array_get($this->getData(), $path, $default);
    }

    /**
     * @param string $path
     * @return bool
     */
    protected function has($path)
    {
        return array_has($this->getData(), $path);
    }

    /**
     * @return array
     */
    public function getData()
    {
        if ($this->data === null){
            $data = $this->request->getBody()->getContents();

            $data = json_decode($data, true);

            if ($data === null){
                $this->data = [];
            } else {
                $this->data = $data;
            }
        }

        return $this->data;
    }

    public function validate()
    {
        $errors = $this->getErrors();

        if (count($errors) > 0){
            throw $errors;
        }
    }

    /**
     * @return array
     */
    protected function schema()
    {
        return [];
    }

    /**
     * @return ErrorsThrowableCollection
     */
    public function getErrors()
    {
        if ($this->errors === null) {

            $binder = new Binder();
            $this->rules($binder);

            $this->errors = (new Performer())->perform($binder, new ArraySourceHandler($this->getData()));
        }

        return $this->errors;
    }

    /**
     * @param Binder $binder
     */
    protected function rules(Binder $binder)
    {
        foreach ($this->schema() as $name => $rule) {

            $binder->bind($name, $this->createRootInflator($rule));
        }
    }

    /**
     * @param string|array $rule
     * @return callable
     */
    private function createRootInflator($rule)
    {
        return function (Property $property) use($rule) {

            if (is_string($rule) && ends_with($rule, '[]')){
                $rule = [cut_string_right($rule, '[]')];
            }

            if (is_array($rule) && count($rule) === 1 && array_key_exists(0, $rule)){
                $property->addRule(new Each(function() use ($rule){
                    return $this->resolveRule(current($rule));
                }));
            } else {
                $property->addRule($this->resolveRule($rule));
            }
        };
    }

    /**
     *
     * @param mixed $rule
     * @return RuleInterface
     */
    private function resolveRule($rule)
    {
        if (is_string($rule)) {
            $rule = $this->mapRules()[$rule];
        }

        if (is_callable($rule)) {
            return call_user_func($rule);
        }

        if (is_object($rule)) {
            return $rule;
        }

        if (is_string($rule)) {
            return new $rule();
        }

        if (is_array($rule)) {
            return new Walk(function (Binder $binder) use($rule) {
                foreach ($rule as $key => $value) {
                    $binder->bind($key, $this->createRootInflator($value));
                }
            });
        }

        throw new RuntimeException('Unable to resolve a validation rule.');
    }

    /**
     *
     * @return array
     */
    protected function mapRules()
    {
        return [
            'string' => StringCast::class,
            'bool' => BooleanCast::class,
            'int' => IntegerCast::class,
            'float' => FloatCast::class,
            'datetime' => Moment::class,
            'document' => DocumentMixedIdentifier::class,
            'array' => (new Callback(function($v){
                return is_array($v);
            }))
                ->setIdentifier('cast')
                ->setMessage('The field should be an array.')
        ];
    }

    /**
     * @param $object
     * @param $property
     * @param callable $modifier
     * @param bool $nullable
     */
    protected function set($object, $property, callable $modifier = null, $nullable = true)
    {
        if (!$this->has($property)){
            return ;
        }

        $accessor = PropertyAccess::createPropertyAccessor();

        $value = $this->get($property);

        if ($modifier !== null){
            $value = $modifier($value);
        }

        if ($nullable || $value !== null){
            $accessor->setValue($object, $property, $value);
        }

        if ($nullable && $value === null && $object instanceof ClearableAwareInterface){
            $object->addClearable($property);
        }
    }
}