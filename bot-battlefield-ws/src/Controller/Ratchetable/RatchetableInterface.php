<?php

namespace App\Controller\Ratchetable;

use Ratchet\ConnectionInterface;

interface RatchetableInterface
{
    public function message(array $clients, ConnectionInterface $from, \stdClass $object): void;
    public function close(array $clients, ConnectionInterface $from): void;
}