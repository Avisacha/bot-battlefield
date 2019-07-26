<?php

namespace App\Controller\Ratchetable;

use App\Service\Player;
use App\Service\Sender;
use App\Service\Serializer;
use Ratchet\ConnectionInterface;

class PlayerController implements RatchetableInterface
{
    private $serializer;
    private $player;
    private $sender;

    public function __construct(Serializer $serializer, Player $player, Sender $sender)
    {
        $this->serializer = $serializer;
        $this->player = $player;
        $this->sender = $sender;
    }

    public function message(array $clients, ConnectionInterface $from, \stdClass $object): void
    {
        foreach ($clients as $client) {
            if ( $from !== $client->getConnection() || !($player = $this->player->getPlayer($object))) {
                continue;
            }

            $client->setPlayer($player);
//
            $object = $this->serializer->serialize($this->player->getPlayers($clients), ["public"], "players");
            $this->sender->send($object ,$clients);
        }
    }

    public function close(array $clients, ConnectionInterface $from): void
    {
        $object = $this->serializer->serialize($this->player->getPlayers($clients), ["public"], "players");
        $this->sender->send($object ,$clients);
    }
}