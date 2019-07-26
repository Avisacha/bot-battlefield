<?php


namespace App\Service;


class Sender
{
    public function send($json, array $clients)
    {
        foreach ($clients as $client) {
            $client->getConnection()->send($json);
        }
        return $this;
    }
}