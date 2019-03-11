<?php

namespace App\Services;


use App\Contracts\AuthenticationContract;
use Illuminate\Support\Facades\Auth;


class AuthenticationService implements AuthenticationContract
{

    public function authenticateUser($credentials){

        if(auth()->attempt($credentials)){

            $user = auth()->user();
            $user['valid'] = '1';
            $response = ['user_id'=>$user['user_id'],'valid'=>$user['valid']];
            return $response;

        }else{

            $response = ['valid'=>'0'];
            return $response;
        }

    }

}