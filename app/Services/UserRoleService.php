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


        $userInUserRoles = UserRoles::where('user_email', $user['email'])->first();

        if($userInUserRoles == null) {

        $userInUserRoles = UserRoles::firstOrCreate(['user_email'=>$user['email'],'user_role'=>'','display_name'=>'','remember_token'=>'']);

            $groups = DB::table('user_roles')
                ->selectRaw('user_role, COUNT(*) as count')
                ->groupBy('user_role')
                ->get();
            $comparisonCount = $groups->where('user_role', 'comparison')->first();
            $controlCount = $groups->where('user_role', 'control')->first();
            $interventionCount = $groups->where('user_role', 'intervention')->first();

            if ($comparisonCount->count < $controlCount->count and $interventionCount->count) {
                $userInUserRoles->user_role = 'comparison';
                $userInUserRoles->save();

                return 'comparison';

            } elseif ($controlCount->count < $comparisonCount->count and $interventionCount->count) {

                $userInUserRoles->user_role = 'control';
                $userInUserRoles->save();

                return 'control';
            } else {

                $userInUserRoles->user_role = 'intervention';
                $userInUserRoles->save();

                return 'intervention';
            }
        }else{
            return $userInUserRoles->user_role;
        }

    }
}
