<?php

namespace Api\Http;

use Api\Http\Header\HeadersRequest;

class Request
{
    private $uri;
    private $body;
    private $method;
    private $headerBag;

    public function getHeaderBag(): HeadersRequest
    {
        return $this->headerBag;
    }

    public function setHeaderBag(HeadersRequest $headerBag): self
    {
        $this->headerBag = $headerBag;
        return $this;
    }

    public function __construct()
    {
        $this->setUri((string)filter_input(INPUT_SERVER, "PATH_INFO"));
        $this->setBody((array)filter_input_array(INPUT_GET) + (array)filter_input_array(INPUT_POST));
        $this->setMethod(filter_input(INPUT_SERVER, "REQUEST_METHOD"));
        $this->setHeaderBag(new HeadersRequest());
    }

    public function getUri(): string
    {
        return $this->uri;
    }

    public function setUri($uri): self
    {
        if (!$uri) {
            $uri = "/";
        }
        $this->uri = $uri;
        return $this;
    }

    public function getBody(): array
    {
        return $this->body;
    }

    public function setBody($body): self
    {
        if (!$this->body) {
            $this->body = [];
        }
        $this->body = $body;
        return $this;
    }

    public function getMethod(): string
    {
        return $this->method;
    }

    public function setMethod($method): self
    {
        $this->method = $method;
        return $this;
    }

}
