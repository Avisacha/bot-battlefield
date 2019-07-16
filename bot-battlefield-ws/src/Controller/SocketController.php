<?php

namespace App\Controller;

use App\Entity\Clients;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
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
    private
        /**
         * @var array
         */
        $clients,
        /**
         * @var Logger
         */
        $logger,

        $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->clients = [];
        $this->serializer = $serializer;

        $streamHandler = new StreamHandler(__DIR__ . "/../../var/log/socket.log");
        $this->logger = new Logger('socket');
        $this->logger->pushHandler($streamHandler);
    }

    /**
     * @return Logger
     */
    public function getLogger(): Logger
    {
        return $this->logger;
    }

    /**
     * @return array
     */
    public function getClients(): array
    {
        return $this->clients;
    }

    public function onOpen(ConnectionInterface $conn)
    {
        $this->logger->debug("onOpen");

        $clients = new Clients();
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
        $this->logger->error($e->__toString());
        $conn->close();
    }

    public function getSerializer(): SerializerInterface
    {
        return $this->serializer;
    }

    protected function jsonEncoder($data, array $group, string $name): string
    {
        $json = $this->getSerializer()->serialize($data, "json", ["groups" => $group]);
        return '{"' . $name . '":' . $json . '}';
    }

}
