<?php

declare(strict_types=1);

namespace App\ModelRepositories;

use App\ModelRepositoryInterfaces\UserAdminModelRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserAdminModelRepository implements UserAdminModelRepositoryInterface
{
    public function find($userId)
    {
        $adminChecker = DB::table('nemo.memberships')
            ->where('parent_entities_id', env('APPLICATION_ENTITY_ID'))
            ->where('individuals_id', $userId)
            ->first();
        if(null !== $adminChecker) {
            return $adminChecker->role_position === 'admin';
        } else {
            return false;
        }
    }
}
