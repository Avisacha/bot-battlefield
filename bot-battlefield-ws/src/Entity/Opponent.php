<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\OpponentRepository")
 */
class Opponent
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Player")
     * @ORM\JoinColumn(nullable=false, unique=true)
     */
    private $playerOne;

    /**
     * @ORM\OneToOne(targetEntity="App\Entity\Player")
     * @ORM\JoinColumn(nullable=false, unique=true)
     */
    private $playerTwo;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlayerOne(): ?Player
    {
        return $this->playerOne;
    }

    public function setPlayerOne(Player $playerOne): self
    {
        $this->playerOne = $playerOne;

        return $this;
    }

    public function getPlayerTwo(): ?Player
    {
        return $this->playerTwo;
    }

    public function setPlayerTwo(Player $playerTwo): self
    {
        $this->playerTwo = $playerTwo;

        return $this;
    }
}
