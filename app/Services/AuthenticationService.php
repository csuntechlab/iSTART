<?php

namespace App\Services;


use App\Contracts\AuthenticationContract;

class AuthenticationService implements AuthenticationContract
{

    public function __construct()
    {

    }

    public function authenticateUser($credentials){

        if(auth()->attempt($credentials)){

            $user = auth()->user()->get();
            //return json_decode($user);
           // dd(gettype($user));
            //dd(json_decode($user));
            $response = $user[0];
            return $response;

        }else{echo 'false';}
    }

}