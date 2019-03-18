<?php

namespace App\Services;
use App\Models\UserGroup;
use App\Contracts\AuthenticationContract;
use Illuminate\Support\Facades\Auth;


class AuthenticationService implements AuthenticationContract
{

    public function authenticateUser($credentials){

        if(auth()->attempt($credentials)){

            $user = auth()->user();
            $userGroupValue = UserGroup::where('user_id', $user['user_id'])->first();
            $user['valid'] = '1';
            $response = ['user_id'=>$user['user_id'],'valid'=>$user['valid'], 'user_group'=>$userGroupValue['user_group']];
            return $response;

        }else{

            $response = ['valid'=>'0'];
            return $response;
        }

    }

}
