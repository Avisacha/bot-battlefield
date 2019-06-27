<?php


namespace Api\Controller;


use Api\Http\Response;

class AuthorizationController extends Controller
{
    public function allow(): Response
    {
        return $this->allowResponse()->getResponse();
    }


}