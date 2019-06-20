<?php

namespace Api\Http\Header;

use Api\Http\Header\HeaderBag;

class HeadersRequest extends HeaderBag
{
    public function __construct()
    {
        parent::__construct();
        $this->headers = [];
        foreach (filter_input_array(INPUT_SERVER) as $key => $value) {
            if ("HTTP_" === substr($key, 0, 5)) {
                $key = substr($key, 5);
                $key = strtolower($key);
                $key = ucwords($key, "_");
                $key = str_replace('_', '-', $key);
                $this->addHeader($key, $value);
            }
        }
    }
}
