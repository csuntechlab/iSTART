<?php

namespace App\Services;
use App\Models\UserGroup;
use App\Contracts\AuthenticationContract;
use App\Contracts\ResearchContract;
use App\ModelRepositoryInterfaces\UserAdminModelRepositoryInterface;
use App\Contracts\UserGroupContract;
use Illuminate\Support\Facades\Auth;


class AuthenticationService implements AuthenticationContract
{
    protected $researchUtility = null;
    protected $userGroupUtility = null;
    protected $userAdminModelUtility = null;

    public function __construct(
        ResearchContract $researchUtility, 
        UserGroupContract $userGroupUtility,
        UserAdminModelRepositoryInterface $userAdminModelUtility
        ){
        $this->researchUtility = $researchUtility;
        $this->userGroupUtility = $userGroupUtility;
        $this->userAdminModelUtility = $userAdminModelUtility;
    }

    public function authenticateUser($credentials){

        if(auth()->attempt($credentials)){
            $user = auth()->user();
           // dd($user);
            if($this->userAdminModelUtility->find($user['user_id'])) {
                return [
                    'user_id' => $user['user_id'],
                    'valid' => '1',
                    'isAdmin' => true,
                    'user_group' => null
                ];
            }

            if($this->researchUtility->userHasResearchId($user) == true){
                $user['valid'] = '1';
                $userGroup = $this->userGroupUtility->sortAuthenticatedUsers($user);

                return [
                    'user_id' => $user['user_id'],
                    'valid' => $user['valid'],
                    'isAdmin' => false,
                    'user_group' => $userGroup
                ];
            } else{
                return ['valid' => '0'];
            }
        }else{
            return ['valid'=>'0'];
         }

    }

}
