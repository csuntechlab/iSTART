<?php

namespace App\Services;
use App\Models\ModuleProgress;
use App\Contracts\AuthenticationContract;
use App\Contracts\ParticipantContract;
use App\ModelRepositoryInterfaces\UserAdminModelRepositoryInterface;
use App\Contracts\UserGroupContract;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;


class AuthenticationService implements AuthenticationContract
{
    protected $participantUtility = null;
    protected $userGroupUtility = null;
    protected $userAdminModelUtility = null;

    public function __construct(
        ParticipantContract $participantUtility,
        UserGroupContract $userGroupUtility,
        UserAdminModelRepositoryInterface $userAdminModelUtility
        ){
        $this->participantUtility = $participantUtility;
        $this->userGroupUtility = $userGroupUtility;
        $this->userAdminModelUtility = $userAdminModelUtility;
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
                $user['valid'] = '1';
                $userGroup = $this->userGroupUtility->sortAuthenticatedUsers($user);
                if ($userGroup !== 'control') {
                    $moduleProgress = ModuleProgress::create([
                        'user_id' => $user['user_id'],
                        'current_module' => '',
                        'current_page' => 0,
                        'max_page' => 0,
                        'expiration_date' => Carbon::now()->addDays(env(EXPIRATION_DATE)),
                    ]);
                }

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
