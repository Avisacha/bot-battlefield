<?php

namespace Api\Repository;

use Api\Entity\Players;
use Api\IOC\Container;
use Api\Manager\Manager;

class PlayerRepository
{
    private $db;

    public function __construct(Manager $manager)
    {
        $this->db = $manager->getConnexion();
    }

    public function createPlayer(Players $players)
    {
        $name = $players->getName();
        $token = $players->getToken();
        $ready = $players->getReady();
        $sql = "INSERT INTO player (name, token, ready) VALUES (?, ?, ?)";
        try {
            $sth = $this->db->prepare($sql);
            $sth->bindValue(1, $name, \PDO::PARAM_STR);
            $sth->bindValue(2, $token, \PDO::PARAM_STR);
            $sth->bindValue(3, $ready, \PDO::PARAM_BOOL);
            $sth->execute();
        } catch (\PDOException $e) {

        }
    }

    public function getPlayer(string $name): Players
    {
        $sql = "SELECT * FROM player WHERE name = ?";
        try {
            $sth = $this->db->prepare($sql);
            $sth->bindValue(1, $name, \PDO::PARAM_STR);
            $sth->execute();
            $sth->setFetchMode(\PDO::FETCH_CLASS, Players::class);
            $result = $sth->fetch();
            if (!$result) {
                throw new \Exception("Aucun joueur trouvé");
            }
            var_dump($result);
            return $result;
        } catch (\PDOException $e) {
            return Container::get(Players::class);
        }
    }

    public function getPlayers(): array
    {
        $sql = "SELECT name FROM player";
        try {
            $sth = $this->db->prepare($sql);
            $sth->execute();
        } catch (\PDOException $e) {
            return [];
        }

        return $sth->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function removePlayer(string $name)
    {
        $sql = "DELETE FROM player WHERE name = ?";
        try {
            $sth = $this->db->prepare($sql);
            $sth->bindValue(1, $name, \PDO::PARAM_STR);
            $sth->execute();
        } catch (\PDOException $e) {

        }
    }

}
