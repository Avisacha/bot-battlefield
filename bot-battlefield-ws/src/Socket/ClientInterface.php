<?php

namespace App\Socket;

use Ratchet\ConnectionInterface;

interface ClientInterface
{
    public function getConnection(): ConnectionInterface;

    public function setConnection(ConnectionInterface $connection): ClientInterface;
}