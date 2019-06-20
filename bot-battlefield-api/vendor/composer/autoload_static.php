<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit87387fc211385fe591adec4251ed75ef
{
    public static $prefixLengthsPsr4 = array (
        'A' => 
        array (
            'Api\\' => 4,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Api\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit87387fc211385fe591adec4251ed75ef::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit87387fc211385fe591adec4251ed75ef::$prefixDirsPsr4;

        }, null, ClassLoader::class);
    }
}
