<?php


namespace App\Service;


use Symfony\Component\Serializer\SerializerInterface;

class Serializer
{
    private $serializer;

    public function __construct(SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
    }

    private function getSerializer(): SerializerInterface
    {
        return $this->serializer;
    }

    public function serialize($data, array $group, string $name): string
    {
        $json = $this->getSerializer()->serialize($data, "json", ["groups" => $group]);
        return '{"' . $name . '":' . $json . '}';
    }
}