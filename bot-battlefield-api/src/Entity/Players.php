<?php


namespace Api\Entity;


class Players implements \JsonSerializable
{
    private $id;
    private $name;
    private $token;
    private $ready;

    public function getId(): int
    {
        return $this->id;
    }

    public function setId($id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function setName($name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getToken(): string
    {
        return $this->token;
    }

    public function setToken($token): self
    {
        $this->token = $token;
        return $this;
    }

    public function getReady(): bool
    {
        return $this->ready;
    }

    public function setReady($ready): self
    {
        $this->ready = $ready;
        return $this;
    }

    public function jsonSerialize()
    {
        return [
            "id" => $this->id,
            "name" => $this->name,
            "token" => $this->token,
            "ready" => $this->ready
        ];
    }
}
