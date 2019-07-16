<?php


namespace Api\Controller;


use Api\Http\Response;

class AccessControlController extends Controller
{
    public function allow(): Response
    {
        return $this->accessControlResponse()->getResponse();
    }

}