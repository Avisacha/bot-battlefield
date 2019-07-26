<?php


namespace App\Service;


use App\Entity\Clients;
use App\Service\Serializer;

class Game
{
    private $serializer;

    public function __construct(Serializer $serializer)
    {
        $this->serializer = $serializer;
    }

    public function createGame(Clients $clientOne)
    {
        $game = new \App\Entity\Game();
        $clientOne->getOpponent()->setGame($game);
        $clientOne->getConnection()->send(
            $this->serializer->serialize($clientOne->getOpponent(), ["public"], "opponent")
        );
    }
}