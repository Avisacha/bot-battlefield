<?php

namespace App\Controller\SocketController;

use App\Controller\Ratchetable\OpponentController;
use App\Controller\Ratchetable\PlayerController;
use App\Controller\Ratchetable\RatchetableInterface;
use App\Entity\Clients;
use App\Socket\ClientInterface;
use App\Socket\SocketController;
use Psr\Log\LoggerInterface;
use Ratchet\ConnectionInterface;

class MainSocketController extends SocketController
{
    private $controllers;

    public function __construct(PlayerController $playerController, OpponentController $opponentController, LoggerInterface $logger)
    {
        parent::__construct($logger);
        $this
            ->addController(OpponentController::class, $opponentController)
            ->addController(PlayerController::class, $playerController);
    }

    public function addController(string $key, RatchetableInterface $controller)
    {
        $this->controllers[$key] = $controller;
        return $this;
    }

    public function onMessage(ConnectionInterface $from, $msg)
    {
        try {
            if (($object = json_decode($msg)) && json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception("JSON Error:" . $msg);
            }
            if (property_exists($object, "id")
                && property_exists($object, "name")
                && property_exists($object, "token")) {
                return $this->controllers[PlayerController::class]->message($this->getClients(), $from, $object);
            }
            if (property_exists($object, "playerOne")
                && property_exists($object, "playerTwo")) {
                return $this->controllers[OpponentController::class]->message($this->getClients(), $from, $object);
            }
            throw new \Exception("Controller Not Found: " . $msg);
        } catch (\Throwable $e) {
            $this->onError($from, $e);
            var_dump($e->getMessage());
        }
    }

    public function onClose(ConnectionInterface $conn)
    {
        parent::onClose($conn);
        foreach ($this->controllers as $controller) {
            $controller->close($this->getClients(), $conn);
        }
    }

    protected function createClient(): ClientInterface
    {
        return new Clients();
    }
}