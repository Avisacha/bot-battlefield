<?php

namespace Api\Controller;

use Api\Authorization\Authorization;
use Api\Entity\Players;
use Api\Http\Response;
use Api\IOC\Container;
use Api\Repository\PlayerRepository;

class PlayersController extends Controller
{
    public function showByOne(string $name): Response
    {
        $data = new \stdClass();
        $playerRepository = Container::get(PlayerRepository::class);
        try {
            $player = $playerRepository->findByName($name);
            $data->player = $player;
        } catch (\Exception $e) {
            $this->getResponse()
                ->setStatusCode(404)
                ->setStatusText("Not Found");
        }

        return $this->jsonResponse($data);
    }

    public function showAll(): Response
    {
        if (200 !== Container::get(Authorization::class)->tokenVerification($this->getRequest(), $this->getResponse())->getStatusCode()) {
            return $this->getResponse();
        }
        $data = Container::get(\stdClass::class);
        $data->players = Container::get(PlayerRepository::class)->findAll();
//        $data->players = Container::get(PlayerRepository::class)->findByConnected();

        return $this
            ->accessControlResponse()
            ->jsonResponse($data);
    }

    public function create(): Response
    {
        $request = $this->getRequest();
        if (!array_key_exists("name", $request->getBody())) {
            return $this->getResponse()->setStatus(422);
        }
        $name = $request->getBody()["name"];
        if (!preg_match("/^[a-z@-Z\\d\\xC0-\\xFF_-]{3,16}$/u", $name)) {
            return $this->getResponse()->setStatus(412);
        }
        $data = new \stdClass();
        $player = Container::get(Players::class)
            ->setName($name)
            ->setToken(password_hash(bin2hex(random_bytes(15)), PASSWORD_DEFAULT))
            ->setReady(time());
        $playerRepository = Container::get(PlayerRepository::class);
        try {
            $playerRepository->persist($player);
        } catch (\InvalidArgumentException $e) {
            return $this->getResponse()->setStatus(409);
        }

        $data->player = $player;

        return $this
            ->accessControlResponse()
            ->jsonResponse($data)
            ->setStatus(201);
    }

}
