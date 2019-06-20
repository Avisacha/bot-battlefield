<?php

namespace Api\IOC;

use mysql_xdevapi\Exception;

class Container
{
    public static $service = [];

    public static function get($className)
    {
        if (!array_key_exists($className, self::$service)) {
            self::$service[$className] = new \ReflectionClass($className);
        }

        $reflectiveClass = self::$service[$className];
        $constructor = $reflectiveClass->getConstructor();
        if (null != $constructor) {
            $params = $constructor->getParameters();
            if (0 < count($params)) {
                $instanceArgs = [];
                foreach ($params as $param) {
                    $type = $param->getType();
                    if (null === $type) {
                        throw new Exception("Container accept constructor parameters to be class");
                    }
                    $instanceArgs[] = self::get($type->getName());
                }
                return $reflectiveClass->newInstanceArgs($instanceArgs);
            }
        }
        return $reflectiveClass->newInstance();
    }

}
