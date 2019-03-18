<?php

namespace App\Services;
use App\Models\UserGroup;
use App\Contracts\AuthenticationContract;
use App\Contracts\ResearchContract;
use App\Contracts\UserGroupContract;
use Illuminate\Support\Facades\Auth;


class AuthenticationService implements AuthenticationContract
{
    protected $researchUtility = null;
    protected $userGroupUtility = null;

    public function __construct(ResearchContract $researchUtility, UserGroupContract $userGroupUtility){
        $this->researchUtility = $researchUtility;
        $this->userGroupUtility = $userGroupUtility;
    }

    public function authenticateUser($credentials){
        if(auth()->attempt($credentials)){
            $user = auth()->user();
            if( $this->researchUtility->userHasResearchId($user) ){
                $user['valid'] = '1';
                $userGroup = $this->userGroupUtility->sortAuthenticatedUsers($user);
                $response = ['user_id'=>$user['user_id'],'valid'=>$user['valid'], 'user_group'=>$userGroup];
                return $response;
            } else{
                $newUser = $this->userGroupUtility->sortAuthenticatedUsers($user);
                $response = ['valid' => '1', 'user_group' => $user['user_group']];
                return $response;
            }
        }else{
            $response = ['valid'=>'0'];
            return $response;
        }

    }

}
