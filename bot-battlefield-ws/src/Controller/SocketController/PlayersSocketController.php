<?php

namespace App\Controller\SocketController;

use App\Controller\SocketController;
use App\Entity\Clients;
use App\Entity\Opponent;
use App\Entity\Player;
use App\Repository\PlayerRepository;
use Ratchet\ConnectionInterface;
use Ratchet\MessageComponentInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\ObjectNormalizer;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Serializer\SerializerInterface;

class PlayersSocketController extends SocketController
{
    private function getPlayers(): array
    {
        $players = [];
        foreach ($this->getClients() as $client) {
            if (!$client->getOpponent()) {
                $players[] = $client->getPlayer();
            }
        }
        return $players;
    }

    private function getPlayer(\stdClass $object)
    {
        $repository = $this->getDoctrine()->getRepository(Player::class);
        $entity = $repository->findOneBy(["id" => $object->id, "name" => $object->name, "token" => $object->token]);

//        var_dump($entity);
        if (null === $entity) {
            throw new \Exception("Not Found:" . $object);
        }

        return $entity;
    }

    public function onMessage(ConnectionInterface $from, $msg)
    {
        try {
            if (($object = json_decode($msg)) && json_last_error() !== JSON_ERROR_NONE) {
                throw new \Exception("JSON Error:" . $msg);
            }

            if (property_exists($object, "id")
                && property_exists($object, "name")
                && property_exists($object, "token")
                && property_exists($object, "ready")) {
                $this->onPlayer($from, $object);
            } else if (property_exists($object, "playerOne")
                && property_exists($object, "playerTwo")) {
                $this->onOpponent($from, $object);
            }

        } catch (\Throwable $throwable) {
            $this->getLogger()->error((string)$throwable);
        }
    }

    public function onClose(ConnectionInterface $conn)
    {
        parent::onClose($conn);
        $json = $this->jsonEncoder($this->getPlayers(), ["public"], "players");
        $this->send($json);
    }

    private function send($json)
    {
        foreach ($this->getClients() as $client) {
            $client->getConnection()->send($json);
        }
    }

    private function getOpponent(ConnectionInterface $from, \stdClass $opponent): Opponent
    {
        try {
            $clientOne = $this->getOpponentClientOne($from, $opponent);
            $clientTwo = $this->getOpponentClientTwo($from, $opponent);

            $entity = new Opponent();
            $entity
                ->setPlayerOne($clientOne->getPlayer())
                ->setPlayerTwo($clientTwo->getPlayer());
            $clientOne->setOpponent($entity);
            $clientTwo->setOpponent($entity);

//            var_dump($entity);

            return $entity;
        } catch (\Throwable $e) {
            var_dump($e->getMessage());
            throw new \Exception("Opponent Not Found: " . $e->getMessage());
        }
    }

    private function onOpponent(ConnectionInterface $from, \stdClass $opponent)
    {
        $entity = $this->getOpponent($from, $opponent);

        $json = $this->jsonEncoder($this->getPlayers(), ["public"], "players");
        $this->send($json);
    }

    private function getOpponentClientOne(ConnectionInterface $from, \stdClass $opponent): Clients
    {
        foreach ($this->getClients() as $client) {
            if ($from === $client->getConnection()
                && $client->getPlayer()->getToken() === $opponent->playerOne->token
                && !$client->getOpponent()) {
                var_dump($client->getPlayer());
                return $client;
            }
        }
        throw new \Exception("PlayerOne Not Found: " . json_encode($opponent));
    }

    private function getOpponentClientTwo(ConnectionInterface $from, \stdClass $opponent)
    {
        foreach ($this->getClients() as $client) {
            if ($from !== $client->getConnection()
                && $client->getPlayer()->getId() === $opponent->playerTwo->id
                && !$client->getOpponent()) {
                var_dump($client->getPlayer());
                return $client;
            }
        }
        throw new \Exception("PlayerTwo Not Found: " . json_encode($opponent));
    }

    private function onPlayer(ConnectionInterface $from, \stdClass $object)
    {
        foreach ($this->getClients() as $client) {
            if (!($player = $this->getPlayer($object)) || null !== $client->getPlayer() || $from !== $client->getConnection()) {
                continue;
            }
            $client->setPlayer($player);

            $object = $this->jsonEncoder($this->getPlayers(), ["public"], "players");
            $this->send($object);
        }

    }

//    public function onClose(ConnectionInterface $conn)
//    {
//        foreach ($this->getClients() as $key => $client) {
//            if ($conn === $client->getConnection()) {
//                $player = $client->getPlayer();
//                var_dump($player);
//                break;
//            }
//        }
//    }
}

//    /**
//     * @Route(
//     *     "/players",
//     *      name="players_show",
//     *      methods={"GET"}
//     * )
//     */
//    public function show(PlayerRepository $repository, SerializerInterface $serializer): Response
//    {
//        $data = $serializer->serialize($repository->findAll(), 'json', ["groups" => "public"]);
//
//        $response = new JsonResponse();
//        $response->setContent($data);
//
//        return $response;
//    }
//
//    /**
//     * @Route(
//     *     "/players/{id<[\d]{1,11}>}",
//     *      name="players_show_one_by_id",
//     *      methods={"GET"}
//     * )
//     */
//    public function showOneById(Player $player, SerializerInterface $serializer): Response
//    {
//        $data = $serializer->serialize($player, 'json', ["groups" => "public"]);
//
//        $response = new JsonResponse();
//        $response->setContent($data);
//
//        return $response;
//    }
//
//    /**
//     * @Route(
//     *     "/players/update/{id<[\d]{1,11}>}",
//     *      name="players_update",
//     *      methods={"GET"}
//     * )
//     */
//    public function update(Player $player, SerializerInterface $serializer): Response
//    {
//        $data = $serializer->serialize($player, 'json', ["groups" => "public"]);
//
//        $response = new JsonResponse();
//        $response->setContent($data);
//
//        $player->setName("Bob" . password_hash("bobobobobobobo", PASSWORD_DEFAULT));
//        $this->getDoctrine()->getManager()->flush();
//        return $response;
//    }
//
//    /**
//     * @Route(
//     *     "/players/remove/{id<[\d]{1,11}>}",
//     *      name="players_remove",
//     *      methods={"GET"}
//     * )
//     */
//    public function remove(Player $player, SerializerInterface $serializer): Response
//    {
//        $data = $serializer->serialize($player, 'json', ["groups" => "public"]);
//
//        $response = new JsonResponse();
//        $response->setContent($data);
//
//        $manager = $this->getDoctrine()->getManager();
//        $manager->remove($player);
//        $manager->flush($player);
//
//        return $response;
//    }
//
//    /**
//     * @Route(
//     *     "/players/create",
//     *      name="players_create",
//     *      methods={"GET"}
//     * )
//     */
//    public function createPlayer(): Response
//    {
//        $entity = new Player();
//        $entity
//            ->setName(password_hash("Bob", PASSWORD_DEFAULT))
//            ->setToken(password_hash("bobobobobobobo", PASSWORD_DEFAULT))
//            ->setReady(time());
//
//        $manager = $this
//            ->getDoctrine()
//            ->getManager();
//
//        $manager->persist($entity);
//        $manager->flush();
//
//        return $this->render('players/index.html.twig', [
//            'controller_name' => 'Create Player',
//        ]);
//
//    }

