<?php


namespace Api\Authorization;


use Api\Http\Request;
use Api\Http\Response;
use Api\IOC\Container;
use Api\Repository\PlayerRepository;
use Api\Repository\Repository;

class Authorization
{
    public function tokenVerification(Request $request, Response $response): Response
    {
        if (!array_key_exists("Authorization", $request->getHeaderBag()->getHeaders())) {
            return $response->setStatus(401);
        }

        $credentials = explode(':',
            base64_decode(ltrim(
                $request
                    ->getHeaderBag()
                    ->getHeaders()['Authorization'], 'Basic '
            ))
        );

        if (2 !== count($credentials)) {
            return $response->setStatus(401);
        }

        try {
            Container::get(PlayerRepository::class)->findOneByAuthorization(... $credentials);
        } catch (\InvalidArgumentException $e) {
            return $response
                ->setStatus(403);
        }

        return $response;
    }
}