<?php

use Api\Http\Response;
use Api\Http\Request;
use Api\IOC\Container;

require(__DIR__ . "/../vendor/autoload.php");

$request = Container::get(Request::class);
$response = null;

$jsonRoutes = file_get_contents(__DIR__ . "/../config/routes.json");
$routes = json_decode($jsonRoutes);

try {
    foreach ($routes as $key => $value) {
        if (1 !== preg_match("/^" . str_replace("/", "\/", $value->path) . "$/", $request->getUri(), $match)) {
            continue;
        } elseif (!in_array($request->getMethod(), $value->methods)) {

            throw new BadMethodCallException();
        } else {
            array_shift($match);

            $controllerName = substr($value->action, 0, strpos($value->action, "::"));
            $controllerActionName = substr($value->action, strpos($value->action, "::") + 2);
            $controller = Container::get($controllerName);

            $explode = explode("/", $request->getUri());

            if (!empty($match)) {

                $response = $controller->{$controllerActionName}(... $match);
            } else {
                $response = $controller->{$controllerActionName}();
            }

            break;
        }
    }
    if (!isset($response)) {
        throw new OutOfRangeException();
    }
} catch (OutOfRangeException | BadMethodCallException $e) {
    $response = new Response();
    if ($e instanceof OutOfRangeException) {
        $response->setVersion("1.1")
            ->setStatusCode(404)
            ->setStatusText("Not Found");
    } else if ($e instanceof BadMethodCallException) {
        $response->setVersion("1.1")
            ->setStatusCode(405)
            ->setStatusText("Method not allowed");
    }
}
header($response->getVersionStatus());

foreach ($response->getHeaders()->getHeaders() as $key => $value) {
    header($key . ": " . $value);
}

echo $response;
