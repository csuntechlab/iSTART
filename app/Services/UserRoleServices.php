<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\UserRoleContracts;
use App\Models\UserRoles;

class UserRoleServices implements UserRoleContracts
{
    public function getRole(array $data): array
    {
        $userRole = UserRoles::where('user_email', $data['user_email'])->first();

        return [
            'user_role' => $userRole->user_role,
            'user_email' => $data['user_email'],
            'display_name' => $userRole->display_name,
            'password' => $userRole->password,
            'remember_token' => $userRole->remember_token,
            ];
    }
}
