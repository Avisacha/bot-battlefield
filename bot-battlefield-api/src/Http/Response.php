<?php

namespace Api\Http;

use Api\Http\Header\HeaderBag;
use Api\IOC\Container;

class Response
{
    private $version;
    private $headers;
    private $body;
    private $statusCode;
    private $statusText;

    public function __construct()
    {
        $this->setVersion(1.1);
        $this->setStatusCode(200);
        $this->setStatusText("OK");
        $this->setHeaders(Container::get(HeaderBag::class));
        $this->setBody("");
    }

    public function getVersion(): string
    {
        return $this->version;
    }

    public function setVersion($version): self
    {
        $this->version = "HTTP/" . $version;
        return $this;
    }

    public function getHeaders(): HeaderBag
    {
        return $this->headers;
    }

    public function setHeaders($headers): self
    {
        $this->headers = $headers;
        return $this;
    }

    public function getBody(): string
    {
        return $this->body;
    }

    public function setBody($body): self
    {
        $this->body = $body;
        return $this;
    }

    public function getStatusCode(): int
    {
        return $this->statusCode;
    }

    public function setStatusCode($statusCode): self
    {
        $this->statusCode = $statusCode;
        return $this;
    }

    public function getStatusText(): string
    {
        return $this->statusText;
    }

    public function setStatusText($statusText): self
    {
        $this->statusText = $statusText;
        return $this;
    }

    public function getVersionStatus(): string
    {
        return $this->getVersion()." ".$this->getStatusCode()." ".$this->getStatusText();
    }

    public function __toString(): string
    {
        return $this->getBody();
    }

    public function addHeader(string $key, string $value): self
    {
        $this->headers->addHeader($key, $value);
        return $this;
    }

}
