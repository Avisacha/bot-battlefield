<?php

namespace App\Socket;

use App\Entity\Clients;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Psr\Log\LoggerInterface;
use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

abstract class SocketController extends AbstractController implements MessageComponentInterface
{
    private $clients;
    private $logger;

    public function __construct(LoggerInterface $logger)
    {
        $this->clients = [];
        $this->logger = $logger;
    }

    public function getClients(): array
    {
        return $this->clients;
    }

    abstract protected function createClient(): ClientInterface;

    public function onOpen(ConnectionInterface $conn)
    {
        $this->logger->debug("onOpen");

        $clients = $this->createClient();
        $clients->setConnection($conn);
        $this->clients[] = $clients;
    }

    public function onClose(ConnectionInterface $conn)
    {
        $this->logger->debug("onCloses");

        foreach ($this->clients as $key => $client) {
            if ($conn === $client->getConnection()) {
                unset($this->clients[$key]);
                return;
            }
        }
    }

    public function onError(ConnectionInterface $conn, \Exception $e)
    {
        $this->logger->error($e->getMessage());
        $conn->close();
    }

}
