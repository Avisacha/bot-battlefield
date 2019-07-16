<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Ratchet\ConnectionInterface;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ClientsRepository")
 */
class Clients
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Player")
     * @ORM\JoinColumn(nullable=false)
     */
    private $player;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\player")
     * @ORM\JoinColumn(nullable=false)
     */
    private $connection;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Opponent")
     */
    private $opponent;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlayer(): ?Player
    {
        return $this->player;
    }

    public function setPlayer(Player $player): self
    {
        $this->player = $player;

        return $this;
    }

    public function getConnection(): ?ConnectionInterface
    {
        return $this->connection;
    }

    public function setConnection(ConnectionInterface $connection): self
    {
        $this->connection = $connection;

        return $this;
    }

    public function getOpponent(): ?Opponent
    {
        return $this->opponent;
    }

    public function setOpponent(?Opponent $opponent): self
    {
        $this->opponent = $opponent;

        return $this;
    }
}
