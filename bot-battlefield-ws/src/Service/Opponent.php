<?php


namespace App\Service;


use App\Entity\Clients;
use App\Entity\Opponent as entityOpponent;
use App\Service\Serializer;
use Ratchet\ConnectionInterface;

class Opponent
{
    private $serializer;

    public function __construct(Serializer $serializer)
    {
        $this->serializer = $serializer;
    }

    public function createOpponent(Clients $clientOne, Clients $clientTwo)
    {
        $entity = new entityOpponent();
        $entity
            ->setPlayerOne($clientOne->getPlayer())
            ->setPlayerTwo($clientTwo->getPlayer());
        $clientOne->setOpponent($entity);
        $clientTwo->setOpponent($entity);

        $clientTwo->getConnection()->send(
            $this->serializer->serialize($clientTwo->getOpponent(), ["public"], "opponent")
        );
    }

//    private function remove(array $clients, ConnectionInterface $from)
//    {
//        foreach ($clients as $client) {
//            if ($from !== $client->getConnection()) {
//                continue;
//            }
//            $client->setOpponent(null);
//
//            $this->close($clients, $from);
//        }
//    }
}