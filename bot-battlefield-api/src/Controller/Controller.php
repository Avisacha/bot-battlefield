<?php

namespace Api\Controller;

//use Api\Controller\Traits\JsonReponseTrait;
use Api\Http\Response;
use Api\Manager\Manager;

abstract class Controller
{
    /**
     * @return Response
     */
    public function getResponse(): Response
    {
        return $this->response;
    }


    private $response;

    public final function __construct(Response $response)
    {
        $this->response = $response;
    }

    protected final function jsonResponse(\stdClass $data): Response
    {
        return $this->response
            ->addHeader("Content-Type", "application/json")
            ->setBody(json_encode($data));
    }

    protected final function displayArray(array $array)
    {
        var_dump($array);
    }

}
