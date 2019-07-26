<?php


namespace App\Service;


use App\Repository\PlayerRepository;

class Player
{
    private $repository;

    public function __construct(PlayerRepository $repository)
    {
        $this->repository = $repository;
    }

    public function getPlayers(array $clients): array
    {
        $players = [];
        foreach ($clients as $client) {
            if (!$client->getOpponent()) {
                $players[] = $client->getPlayer();
            }
        }
        return $players;
    }

    public function getPlayer(\stdClass $object): \App\Entity\Player
    {
        $entity = $this->repository->findOneBy(["id" => $object->id, "name" => $object->name, "token" => $object->token]);
        if (null === $entity) {
            throw new \Exception("Not Found:" . $object);
        }
        return $entity;
    }
}