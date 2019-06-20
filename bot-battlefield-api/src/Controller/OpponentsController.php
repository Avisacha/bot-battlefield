<?php

namespace Api\Controller;

use Api\Entity\Opponents;
use Api\Entity\Players;
use Api\Http\Response;
use Api\IOC\Container;

class OpponentsController extends Controller
{
    public function show(): Response
    {

        $this->getConnection();
        exit;

        $data = new \stdClass();
        $data->opponent = (Container::get(Opponents::class))
            ->setId(1)
            ->setPlayer1((Container::get(Players::class))
                ->setId(1)
                ->setName("Bob")
                ->setToken("123456789")
                ->setReady(false))
            ->setPlayer2((Container::get(Players::class))
                ->setId(2)
                ->setName("George")
                ->setToken("987654321")
                ->setReady(false));

        return $this->jsonResponse($data);
    }

}
