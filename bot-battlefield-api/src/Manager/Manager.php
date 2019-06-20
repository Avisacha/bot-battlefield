<?php

namespace Api\Manager;

class Manager
{
    private $db;

    public function __construct()
    {
        try {
            $jsonConfig = file_get_contents(__DIR__ . "/../../config/config.json");
            $config = json_decode($jsonConfig)->database;

            $this->db = new\PDO(
                $config->driver . ":host=" . $config->host . ";dbname=" . $config->dbname . ";charset=" . $config->charset,
                $config->username,
                $config->passwd,
                [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]
            );

        } catch (\PDOException $e) {
            echo $e;
        }
    }

    public function getConnexion(): \PDO
    {
        return $this->db;
    }

}
