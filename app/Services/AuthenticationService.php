<?php

namespace App\Services;


use App\Contracts\AuthenticationContract;
use App\Contracts\ResearchContract;
use Illuminate\Support\Facades\Auth;


class AuthenticationService implements AuthenticationContract, ResearchContract
{
    protected $researchUtility;

    public function __constructor(ResearchContract $researchUtility){
        $this->researchUtility = $researchUtility;
    }

    public function authenticateUser($credentials){
        $user = auth()->user();
        dd($user['email']);
        if(auth()->attempt($credentials)){
            if( $this->researchUtility->userHasResearchId($user['user_email']) == true ){
                $user['valid'] = '1';
                $response = ['user_id'=>$user['user_id'],'valid'=>$user['valid']];
                dd($response);
                return $response;
            } else{
                $response = ['valid' => '0'];
                return $response;
            }
        }else{
            $response = ['valid'=>'0'];
            return $response;
        }

    }

}
