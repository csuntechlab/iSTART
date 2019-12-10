<?php

namespace App\Services;
use App\Models\ModuleProgress;
use App\Contracts\AuthenticationContract;
use App\Contracts\ParticipantContract;
use App\Contracts\ModuleProgressContract;
use App\ModelRepositoryInterfaces\UserAdminModelRepositoryInterface;
use App\Contracts\UserGroupContract;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;


class AuthenticationService implements AuthenticationContract
{
    protected $participantUtility = null;
    protected $userGroupUtility = null;
    protected $userAdminModelUtility = null;
    protected $moduleProgressUtility = null;

    public function __construct(
        ParticipantContract $participantUtility,
        UserGroupContract $userGroupUtility,
        UserAdminModelRepositoryInterface $userAdminModelUtility,
        ModuleProgressContract $moduleProgressUtility
        ){
        $this->participantUtility = $participantUtility;
        $this->userGroupUtility = $userGroupUtility;
        $this->userAdminModelUtility = $userAdminModelUtility;
        $this->moduleProgressUtility = $moduleProgressUtility;
    }

    public function authenticateUser($credentials){

        if(auth()->attempt($credentials)){
            $user = auth()->user();

            if($this->userAdminModelUtility->find($user['user_id'])) {
                return [
                    'user_id' => $user['user_id'],
                    'valid' => '1',
                    'isAdmin' => true,
                    'user_group' => null
                ];
            }

            if($this->participantUtility->userHasParticipantId($user) == true){
                $response = [
                    'user_id' => $user['user_id'],
                    'valid' => '1',
                    'isAdmin' => false
                ];
                $userGroup = $this->userGroupUtility->sortAuthenticatedUsers($user);
                $response['user_group'] = $userGroup;
                $moduleCheck = $this->moduleProgressUtility->moduleExists($user);
                if ($moduleCheck === false) {
                    /* if ($userGroup !== 'control') {
                        $moduleProgress = $this->moduleProgressUtility->createNewModule($user);
                        $response['expiration_date'] = $moduleProgress->expiration_date;
                    }*/
                }
                return $response;

            } else{
                return ['valid' => '0'];
            }
        }else{
            return ['valid'=>'0'];
         }

    }

}
