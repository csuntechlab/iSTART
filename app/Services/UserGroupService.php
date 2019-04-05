<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\UserGroupContract;
use App\Models\UserGroup;
use Illuminate\Support\Facades\DB;
use App\Contracts\UserAssignedGroupEmailContract;

class UserGroupService implements UserGroupContract
{
    protected $userAssignedGroupEmailUtility = null;

    public function __construct(UserAssignedGroupEmailContract $userAssignedGroupEmailUtility)
    {
        $this->userAssignedGroupEmailUtility = $userAssignedGroupEmailUtility;
    }

    public function getGroup($data)
    {
        $userGroup = UserGroup::where('user_id', $data['user_id'])->first();

        return [
            'user_group' => $userGroup['user_group'],
            'user_id' => $data['user_id'],
            'display_name' => $userGroup['display_name'],
            'remember_token' => $userGroup['remember_token'],
            ];
    }

    public function sortAuthenticatedUsers($user)
    {
        $userInUserGroup = UserGroup::where('user_id', $user['user_id'])->first();

        if($userInUserGroup == null) {

            $userInUserGroup = new UserGroup();
            $userInUserGroup->user_id = $user['user_id'];
            $userInUserGroup->user_group = null;
            $userInUserGroup->display_name = null;
            $userInUserGroup->remember_token = null;
            $userInUserGroup->save();

            $groups = DB::table('user_groups')
                ->selectRaw('user_group, COUNT(*) as count')
                ->groupBy('user_group')
                ->get();

            $comparison_Count = 0;
            $control_Count = 0;
            $intervention_Count = 0;

            $comparisonCountFromData = $groups->where('user_group', 'comparison')->first();
            $controlCountFromData = $groups->where('user_group', 'control')->first();
            $interventionCountFromData = $groups->where('user_group', 'intervention')->first();


            if ( $comparisonCountFromData != NULL){
                $comparison_Count = $comparisonCountFromData->count;

            }
            if ($controlCountFromData != NULL) {
                $control_Count = $controlCountFromData->count;
            }

            if ($interventionCountFromData != NULL) {
                $intervention_Count = $interventionCountFromData->count;

            }

            if ($control_Count == 0){

                $userInUserGroup->user_group = 'control';
                $userInUserGroup->save();

            }elseif($comparison_Count == 0){

                $userInUserGroup->user_group = 'comparison';
                $userInUserGroup->save();


            }elseif ($intervention_Count == 0){

                $userInUserGroup->user_group = 'intervention';
                $userInUserGroup->save();

            }elseif ( $comparison_Count <= $control_Count and $comparison_Count<= $intervention_Count){

                $userInUserGroup->user_group = 'comparison';
                $userInUserGroup->save();

            } elseif ($control_Count < $comparison_Count and $control_Count< $intervention_Count) {

                $userInUserGroup->user_group = 'control';
                $userInUserGroup->save();

            } else{

                $userInUserGroup->user_group = 'intervention';
                $userInUserGroup->save();
            }
        }

        $this->userAssignedGroupEmailUtility->sendMail();

        return $userInUserGroup->user_group;
    }
}
