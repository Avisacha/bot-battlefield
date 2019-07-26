<?php

namespace App\Controller\Ratchetable;

use App\Entity\Clients;
use App\Entity\Opponent;
use App\Entity\Opponent as entityOpponent;
use App\Service\Opponent as serviceOpponent;
use App\Entity\Game as entityGame;
use App\Service\Game as serviceGame;
use App\Service\Player;
use App\Service\Sender;
use App\Service\Serializer;
use App\Service\Client;
use Ratchet\ConnectionInterface;

class OpponentController implements RatchetableInterface
{
    private $serializer;
    private $opponent;
    private $sender;
    private $player;
    private $client;
    private $game;

    public function __construct(
        Serializer $serializer,
        serviceOpponent $opponent,
        Sender $sender,
        Player $player,
        Client $client,
        serviceGame $game)
    {
        $this->serializer = $serializer;
        $this->opponent = $opponent;
        $this->sender = $sender;
        $this->player = $player;
        $this->client = $client;
        $this->game = $game;
    }

    private function create(array $clients, ConnectionInterface $from, \stdClass $object)
    {
        $clientOne = $this->client->getClientByPlayer($clients, $object->playerOne);
        $clientTwo = $this->client->getClientByPlayer($clients, $object->playerTwo);

        if (!$clientOne->getOpponent()
            && !$clientTwo->getOpponent()
            && $this->client->verifyToken($clientOne, $object->playerOne)
            && $clientOne->getConnection() === $from) {
            $this->opponent->createOpponent($clientOne, $clientTwo);
            return;
        }

        if ($clientOne->getOpponent()
            && $clientTwo->getOpponent()
            && $clientOne->getOpponent() === $clientTwo->getOpponent()
            && $clientTwo->getConnection() === $from
            && !$clientTwo->getOpponent()->getGame()) {
            $this->game->createGame($clientOne);
            return;
        }
    }

    private function remove(array $clients, ConnectionInterface $from)
    {
        foreach ($clients as $client) {
            if ($from !== $client->getConnection()) {
                continue;
            }
            $client->setOpponent(null);
            $this->close($clients, $from);
        }
    }

    public function message(array $clients, ConnectionInterface $from, \stdClass $object): void
    {
        if (!$object->playerOne || !$object->playerTwo) {
            $this->remove($clients, $from);
        } else {
            $this->create($clients, $from, $object);
        }

        $json = $this->serializer->serialize($this->player->getPlayers($clients), ["public"], "players");
        $this->sender->send($json, $clients);
    }

    public function close(array $clients, ConnectionInterface $from): void
    {
        foreach ($clients as $client) {
            if (!$client->getOpponent()) {
                continue;
            }
            try {
                foreach ($clients as $client2) {
                    if ($client2->getOpponent()
                        && $client->getPlayer()->getId() !== $client2->getPlayer()->getId()
                        && $client->getOpponent() === $client2->getOpponent()) {
                        throw new \LogicException();
                    }
                }
                $client
                    ->setOpponent(null)
                    ->getConnection()->send($this->serializer->serialize(new Opponent(), ["public"], "opponent"));
            } catch (\LogicException $e) {
            }
        }
    }
}
