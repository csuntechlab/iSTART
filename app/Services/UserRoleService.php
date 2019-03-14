<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\UserRoleContract;
use App\Models\UserRoles;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Support\Facades\Input;
use Illuminate\Http\Request;

class UserRoleService implements UserRoleContract
{
    public function getRole(array $data): array
    {
        $userRole = UserRoles::where('user_email', $data['user_email'])->first();

        return [
            'user_role' => $userRole['user_role'],
            'user_email' => $data['user_email'],
            'display_name' => $userRole['display_name'],
            'remember_token' => $userRole['remember_token'],
            ];
    }


    public function sortAuthenticatedUsers($user)
    {
        $userInUserRoles = UserRoles::where('user_id', $user['user_id'])->first();
        //dd($userInUserRoles);
        //dd($user);


        if($userInUserRoles == null) {

       // $userInUserRoles = UserRoles::firstOrCreate(['user_id'=>$user['user_id'],'user_role'=>'','display_name'=>'','remember_token'=>'']);
           // dd($userInUserRoles);

            $userInUserRoles = new UserRoles();
            $userInUserRoles->user_id = $user['user_id'];
            $userInUserRoles->user_role = null;
            $userInUserRoles->display_name = null;
            $userInUserRoles->remember_token = null;
            $userInUserRoles->save();


            $groups = DB::table('user_roles')
                ->selectRaw('user_role, COUNT(*) as count')
                ->groupBy('user_role')
                ->get();

            $comparison_Count = 0;
            $control_Count = 0;
            $intervention_Count = 0;

            $comparisonCountFromData = $groups->where('user_role', 'comparison')->first();
            $controlCountFromData = $groups->where('user_role', 'control')->first();
            $interventionCountFromData = $groups->where('user_role', 'intervention')->first();


            if ( $comparisonCountFromData != NULL){
                $comparison_Count = $comparisonCountFromData->count;

            }
            if ($controlCountFromData != NULL) {
                $control_Count = $controlCountFromData->count;
            }

            if ($interventionCountFromData != NULL) {
                $intervention_Count = $interventionCountFromData->count;
                //ONLY CONTROL IS POPULATING, NOTHING ELSE IN THE DATABASE IS.

            }

            if ($control_Count == 0){

                $userInUserRoles->user_role = 'control';
                $userInUserRoles->save();

               // dd($userInUserRoles);

                //return $userInUserRoles->user_role;


            }elseif($comparison_Count == 0){

                $userInUserRoles->user_role = 'comparison';
                $userInUserRoles->save();


            }elseif ($intervention_Count == 0){

                $userInUserRoles->user_role = 'intervention';
                $userInUserRoles->save();

            }elseif ( $comparison_Count <= $control_Count and $comparison_Count<= $intervention_Count){

                $userInUserRoles->user_role = 'comparison';
                $userInUserRoles->save();

            } elseif ($control_Count < $comparison_Count and $control_Count< $intervention_Count) {

                $userInUserRoles->user_role = 'control';
                $userInUserRoles->save();

            } else{

                $userInUserRoles->user_role = 'intervention';
                $userInUserRoles->save();
            }
           // var_dump($groups);
        }

        return $userInUserRoles->user_role;
    }
}
