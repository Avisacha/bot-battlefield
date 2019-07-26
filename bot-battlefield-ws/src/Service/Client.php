<?php


namespace App\Service;


use App\Entity\Clients;

class Client
{
    public function verifyToken(Clients $client, \stdClass $object)
    {
        if ($client->getPlayer()->getToken() !== $object->token){
            throw new \Exception('Invalid Token');
        }
        return true;
    }

    public function getClientByPlayer(array $clients, \stdClass $player): Clients
    {
        foreach ($clients as $client) {
            if ($client->getPlayer()->getId() === $player->id) {
                return $client;
            }
        }
    }
}