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

            if( $hasResearchId = $this->researchUtility->userHasResearchId($user) == true){
                $user['valid'] = '1';
                $userGroup = $this->userGroupUtility->sortAuthenticatedUsers($user);
                $response = ['user_id'=>$user['user_id'],'valid'=>$user['valid'], 'user_group'=>$userGroup, 'research_id' => $hasResearchId];
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
