<?php


namespace Api\Entity;


class Opponents extends Entity implements \JsonSerializable
{
    private $id;
    private $player1;
    private $player2;

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
        return $this;
    }

    public function getPlayer1()
    {
        return $this->player1;
    }

    public function setPlayer1($player1)
    {
        $this->player1 = $player1;
        return $this;
    }

    public function getPlayer2()
    {
        return $this->player2;
    }

    public function setPlayer2($player2)
    {
        $this->player2 = $player2;
        return $this;
    }

    public function jsonSerialize()
    {
        return [
            "id" => $this->id,
            "player1" => $this->player1,
            "player2" => $this->player2
        ];
    }
}