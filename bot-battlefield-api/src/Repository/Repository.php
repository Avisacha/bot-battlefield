<?php


namespace Api\Repository;


use Api\Entity\Entity;

interface Repository
{
    public function findOneByAuthorization(int $id, string $token): Entity;
}