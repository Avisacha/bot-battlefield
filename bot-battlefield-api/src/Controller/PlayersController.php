<?php

namespace Api\Controller;

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
        $this->tokenVerification();

        $playerRepository = Container::get(PlayerRepository::class);

        $data = new \stdClass();
        $data->players = [];
        $players = $playerRepository->findAll();

        foreach ($players as $key => $value) {
            array_push($data->players, $value);
        }

        return $this
            ->allowResponse()
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
            ->allowResponse()
            ->jsonResponse($data)
            ->setStatus(201);
    }

    public function remove(string $name): Response
    {
        $data = new \stdClass();
        $playerRepository = Container::get(PlayerRepository::class);

        try {
            $playerRepository->findByName($name);

            $playerRepository->removePlayer($name);
            $getAllPlayers = $playerRepository->findAll();
            foreach ($getAllPlayers as $key => $value) {
                $data->$key = $value;
            }
            return $this->jsonResponse($data);
        } catch (\Exception $e) {
            $response = parent::getResponse();
//            $response = new Response();
            $response->setVersion("1.1")
                ->setStatus(404);
            return $response;
        }

    }

    public function tokenVerification(): Response
    {
        if ('GET' !== parent::getRequest()->getMethod()) {
            return $this->getResponse();
        }

        $id = filter_input(INPUT_GET, 'id');
        $token = filter_input(INPUT_GET, 'token');

        if (!$id) {
            return $this
                ->getResponse()
                ->setVersion(1.1)
                ->setStatus(401);
        }

        if (!$token) {
            return $this
                ->getResponse()
                ->setVersion(1.1)
                ->setStatus(401);
        }

        $playerRepository = Container::get(PlayerRepository::class);
        $player = $playerRepository->findByIdToken($id, $token);

        if (!$player) {
            return $this
                ->getResponse()
                ->setVersion(1.1)
                ->setStatus(401);
        }
    }

}
