<?php

namespace Api\Controller;

use Api\Entity\Players;
use Api\Http\Response;
use Api\IOC\Container;
use Api\Repository\PlayerRepository;

class PlayersController extends Controller
{
    public function show(string $name): Response
    {
        $data = new \stdClass();
        $playerRepository = Container::get(PlayerRepository::class);
        try {
            $player = $playerRepository->getPlayer($name);
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
        $data = new \stdClass();
        $playerRepository = Container::get(PlayerRepository::class);
        $players = $playerRepository->getPlayers();
        foreach ($players as $key => $value) {
            $data->$key = $value;
        }
        return $this->jsonResponse($data);
    }

    public function create(string $name)
    {
//        $data = new \stdClass();
        $player = Container::get(Players::class)
            ->setName($name)
            ->setToken(bin2hex(random_bytes(15)))
            ->setReady(false);

        $playerRepository = Container::get(PlayerRepository::class);

        try {
            $playerRepository->getPlayer($name);

            $response = new Response();
            $response->setVersion("1.1")
                ->setStatusCode(409)
                ->setStatusText("Conflict");

//            return $response;
        } catch (\Exception $e) {
            $playerRepository->createPlayer($player);
            $getPlayer = $playerRepository->getPlayer($name);
//            $data->player = $getPlayer;

//            return $this->jsonResponse($data);
        }
    }

    public function remove(string $name): Response
    {
        $data = new \stdClass();
        $playerRepository = Container::get(PlayerRepository::class);

        try {
            $playerRepository->getPlayer($name);

            $playerRepository->removePlayer($name);
            $getAllPlayers = $playerRepository->getPlayers();
            foreach ($getAllPlayers as $key => $value) {
                $data->$key = $value;
            }
            return $this->jsonResponse($data);
        } catch (\Exception $e) {
            $response = new Response();
            $response->setVersion("1.1")
                ->setStatusCode(404)
                ->setStatusText("Not Found");
            return $response;
        }

    }

    public function existingVerification(string $name): Response
    {
        $playerRepository = Container::get(PlayerRepository::class);
        $response = new Response();
        try {
            $playerRepository->getPlayer($name);
            $response->setVersion("1.1")
                ->setStatusCode(200)
                ->setStatusText("OK");
            var_dump($response);
            return $response;
        } catch (\Exception $e) {
            $response->setVersion("1.1")
                ->setStatusCode(409)
                ->setStatusText("Conflict");
            var_dump($response);
            return $response;
        }
    }

}
