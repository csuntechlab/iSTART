<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\UserGroupContract;
use App\Models\UserGroups;

class UserGroupService implements UserGroupContract
{
    public function getGroup(array $data): array
    {
        $userGroup = UserGroups::where('user_email', $data['user_email'])->first();

        return [
            'user_group' => $userGroup['user_group'],
            'user_email' => $data['user_email'],
            'display_name' => $userGroup['display_name'],
            'remember_token' => $userGroup['remember_token'],
            ];
    }
}
