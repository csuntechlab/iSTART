<?php

namespace App\Services;

use App\Contracts\UserRoleContracts;
use App\Models\UserRoles;
use Illuminate\Http\Request;



class UserRoleServices implements UserRoleContracts
{
    public function getRole(array $data): array
    {
        $userRole = UserRoles::where('user_email', $data['user_email'])->first();
        return [
            'user_role' => $userRole->user_role,
            'user_email' => $data['user_email']
            ];
    }
}
