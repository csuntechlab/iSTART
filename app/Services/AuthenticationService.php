<?php

namespace App\Services;
use App\Contracts\AuthenticationContract;
use App\Contracts\ResearchContract;
use Illuminate\Support\Facades\Auth;


class AuthenticationService implements AuthenticationContract
{
    protected $researchUtility = null;

    public function __construct(ResearchContract $researchUtility){
        $this->researchUtility = $researchUtility;
    }

    public function authenticateUser($credentials){
        if(auth()->attempt($credentials)){
            $user = auth()->user();
            if( $this->researchUtility->userHasResearchId($user) ){
                $user['valid'] = '1';
                $response = ['user_id'=>$user['user_id'],'valid'=>$user['valid']];
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
