<?php
namespace ImmediateSolutions;
use Doctrine\Common\Cache\ArrayCache;
use Doctrine\Common\Proxy\AbstractProxyFactory;
use ImmediateSolutions\Api\Support\Protectors\AllProtector;
use ImmediateSolutions\Api\Support\Protectors\AuthProtector;
use ImmediateSolutions\Api\Support\Protectors\OwnerProtector;
use ImmediateSolutions\Infrastructure\AbstractConfigProvider;

/**
 * @author Igor Vorobiov<igor.vorobioff@gmail.com>
 */
class ConfigProvider extends AbstractConfigProvider
{
    /**
     * @return array
     */
    public function getConfig()
    {
        return [
            'packages' => [
                'Agent',
                'User',
                'Session',
                'Document'
            ],

            'debug' => $this->parameter('debug', false),

            'base_url' => $this->parameter('base_url'),

            'doctrine' => [
                'db' => 'default',

                'connections' => [
                    'default' => [
                        'driver' => 'pdo_mysql',
                        'user' => $this->parameter('database.username'),
                        'password' => $this->parameter('database.password'),
                        'dbname' => $this->parameter('database.name'),
                        'charset' => 'utf8',
                        'host' => $this->parameter('database.host')
                    ]
                ],

                'cache' => ArrayCache::class,
                'proxy' => [
                    'auto' => AbstractProxyFactory::AUTOGENERATE_ALWAYS,
                    'dir' => APP_PATH.'/.sparrow/proxies',
                    'namespace' => 'ImmediateSolutions\Temp\Proxies'
                ],
                'migrations' => [
                    'dir' => APP_PATH.'/migrations',
                    'namespace' => 'ImmediateSolutions\Migrations',
                    'table' => 'migrations'
                ],
                'entities' => [
                    //
                ],

                'types' => [
                    //
                ]
            ],

            'protectors' => [
                'all' => AllProtector::class,
                'auth' => AuthProtector::class,
                'owner' => OwnerProtector::class
            ]
        ];
    }
}