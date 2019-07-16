<?php

namespace App\Controller\SocketController;

use App\Controller\SocketController;
use App\Entity\Opponent;
use App\Entity\Player;
use App\Repository\OpponentRepository;
use App\Repository\PlayerRepository;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;
use Ratchet\ConnectionInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class OpponentsSocketController extends SocketController
{
    public final function onMessage(ConnectionInterface $from, $msg)
    {
        foreach ($this->getClients() as $client) {
            if ($from != $client) {
                $client->send($msg);
            }
        }
    }
//    /**
//     * @Route(
//     *     "/opponents",
//     *      name="opponent_show",
//     *      methods={"GET"}
//     * )
//     */
//    public function show(OpponentRepository $repository, SerializerInterface $serializer): Response
//    {
//        $data = $serializer->serialize($repository->findAll(), 'json',
//            ["groups" => "public"]
//        );
//
//        $response = new JsonResponse();
//        $response->setContent($data);
//
////        var_dump(sys_get_temp_dir());
//
//        return $response;
//    }
//
//
//
//    /**
//     * @Route(
//     *     "/opponents/create/{idOne<[\d]{1,11}>}/{idTwo<[\d]{1,11}>}",
//     *      name="opponents_create",
//     *      methods={"GET"})
//     */
//    public final function create(PlayerRepository $repository, int $idOne, int $idTwo, SerializerInterface $serializer): Response
//    {
//        $playerOne = $repository->find($idOne);
//        $playerTwo = $repository->find($idTwo);
//        $response = new JsonResponse();
//
//        if ((!$playerOne) || (!$playerTwo)) {
//            return $response->setStatusCode(404);;
//        }
//
//        $opponent = new Opponent();
//        $opponent->setPlayerOne($playerOne)->setPlayerTwo($playerTwo);
//        $manager = $this->getDoctrine()->getManager();
//        $manager->persist($opponent);
//
//        try {
//            $manager->flush();
//        } catch (UniqueConstraintViolationException $e) {;
//            $response->setStatusCode(409);
//            dump('Player already exist');
//            return $response;
//        }
//
//        $data = $serializer->serialize($opponent, 'json');
//        $response->setContent($data);
//
//        return $response;
//    }
}
