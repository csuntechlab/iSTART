<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\UserRoleContract;
use App\Models\UserRoles;

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
}
