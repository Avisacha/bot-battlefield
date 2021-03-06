<?php

namespace Api\Repository;

use Api\Entity\Entity;
use Api\Entity\Players;
use Api\IOC\Container;
use Api\Manager\Manager;

class PlayerRepository implements Repository
{
    private $db;

    public function __construct(Manager $manager)
    {
        $this->db = $manager->getConnexion();
    }

    public function persist(Players $players): Players
    {
        $name = $players->getName();
        $token = $players->getToken();
        $ready = $players->getReady();
        $sql = "INSERT INTO player (name, token, ready) VALUES (?, ?, ?)";
        try {
            $sth = $this->db->prepare($sql);
            $sth->bindValue(1, $name);
            $sth->bindValue(2, $token);
            $sth->bindValue(3, $ready);
            $sth->execute();
            $players->setId($this->db->lastInsertId());
        } catch (\PDOException $e) {
            throw new \InvalidArgumentException();
        }
        return $players;
    }

    public function findByName(string $name): Players
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
//            var_dump($result);
            return $result;
        } catch (\PDOException $e) {
            return Container::get(Players::class);
        }
    }

    public function findOneByAuthorization(int $id, string $token): Entity
    {
        $sql = "SELECT * FROM player WHERE id = ? AND token = ?";
        try {
            $sth = $this->db->prepare($sql);
            $sth->bindValue(1, $id, \PDO::PARAM_INT);
            $sth->bindValue(2, $token, \PDO::PARAM_STR);
            $sth->execute();
            $sth->setFetchMode(\PDO::FETCH_CLASS, Players::class);
            $result = $sth->fetch();
            if (!$result) {
                throw new \Exception("Aucun joueur trouvé");
            }
            return $result;
        } catch (\PDOException $e) {
            return Container::get(Players::class);
        }
    }

    public function findAll(): array
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

    public function findByConnected(): array
    {
       $sql = "SELECT name FROM player AS p, opponent AS o WHERE p.id = o.player_one_id OR p.id = o.player_two_id";
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
