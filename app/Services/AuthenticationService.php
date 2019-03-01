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

            $user = auth()->user();
             $user['valid'] = '1';
            $response = ['user_id'=>$user->user_id,'valid'=>$user->valid];//change this objects
            return $response;

        }else{

            $response = ['valid'=>'0'];
            return $response;
        }

    }

}