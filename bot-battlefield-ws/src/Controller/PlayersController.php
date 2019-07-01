<?php

namespace App\Controller;

use App\Entity\Player;
use App\Repository\PlayerRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PlayersController extends AbstractController
{
    /**
     * @Route(
     *     "/players",
     *      name="players_show",
     *     methods={"GET"}
     * )
     */
    public function show(PlayerRepository $repository): Response
    {
        dump($repository->findAll());
        dump($repository->find(1));
        dump($repository->findByName('$2y$10$65EbTnMJTNFhCdA2./yv2upvIopI5gIMpx2uBY17Tx2/eH2FB5Tnu'));
        dump($repository->findOneByName('$2y$10$dB9Adt4W.0vOAybBgazssejhgdyO3W2rFxcO80fbaWB2CF2igGohK'));
        dump($repository->findBy([
            'name' => '$2y$10$ZEduzqDiVYBtDJO4/BaPY.HAifGZZo2l0oTFrQH0ZhKnX8vF/sJWi'
        ]));


        return $this->render('players/index.html.twig', [
            'controller_name' => 'Show All',
        ]);
    }

    /**
     * @Route(
     *     "/players/create",
     *      name="players_create",
     *     methods={"GET"}
     * )
     */
    public function createPlayer(): Response
    {
        $entity = new Player();
        $entity
            ->setName(password_hash("Bob", PASSWORD_DEFAULT))
            ->setToken(password_hash("bobobobobobobo", PASSWORD_DEFAULT))
            ->setReady(time());

        $manager = $this
            ->getDoctrine()
            ->getManager();

        $manager->persist($entity);
        $manager->flush();

//        dump(
//
//        );

        return $this->render('players/index.html.twig', [
            'controller_name' => 'Create Player',
        ]);

    }
}
