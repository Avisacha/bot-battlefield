<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\PlayerRepository")
 */
class Player
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=164, unique=true)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=164, unique=true)
     */
    private $token;

    /**
     * @ORM\Column(type="integer")
     */
    private $ready;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getToken(): ?string
    {
        return $this->token;
    }

    public function setToken(string $token): self
    {
        $this->token = $token;

        return $this;
    }

    public function getReady(): ?int
    {
        return $this->ready;
    }

    public function setReady(int $ready): self
    {
        $this->ready = $ready;

        return $this;
    }
}
