<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\UserGroupContract;
use App\Models\UserGroups;

class UserGroupService implements UserGroupContract
{
    public function getGroup(array $data): array
    {
        $userGroup = UserGroups::where('user_id', $data['user_id'])->first();

        return [
            'user_group' => $userGroup['user_group'],
            'user_id' => $data['user_id'],
            'display_name' => $userGroup['display_name'],
            'remember_token' => $userGroup['remember_token'],
            ];
    }
}
