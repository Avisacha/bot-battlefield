<?php

namespace Api\Controller;

use Api\Http\Request;
use Api\Http\Response;
use Api\IOC\Container;
use Api\Repository\PlayerRepository;

abstract class Controller
{
    private $response;
    private $request;

    public final function __construct(Response $response, Request $request)
    {
        $this->response = $response;
        $this->request = $request;
    }

    public function getResponse(): Response
    {
        return $this->response;
    }

    public function getRequest(): Request
    {
        return $this->request;
    }

    protected final function jsonResponse(\stdClass $data): Response
    {
        return $this->response
            ->addHeader("Content-Type", "application/json")
            ->setBody(json_encode($data));
    }

    public function allowResponse(): self
    {
        $this->getResponse()
            ->addHeader("Access-Control-Allow-Origin", "*")
            ->addHeader("Access-Control-Allow-Headers", "Content-Type")
            ->addHeader("Access-Control-Allow-Methods", "POST, GET");

        return $this;
    }

}
