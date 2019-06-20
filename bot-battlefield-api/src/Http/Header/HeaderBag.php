<?php

namespace Api\Http\Header;

class HeaderBag
{
    protected $headers;

    public function __construct()
    {
        $this->setHeaders([]);
    }

    public function getHeaders(): array
    {
        return $this->headers;
    }

    public function setHeaders(array $headers): self
    {
        $this->headers = $headers;
        return $this;
    }

    public function addHeader(string $key, string $value): self
    {
        $this->headers[$key] = $value;
        return $this;
    }

}
