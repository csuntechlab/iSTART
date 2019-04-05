<?php

declare(strict_types=1);

namespace App\ModelRepositories;

use App\ModelRepositoryInterfaces\UserModelRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Facades\DB;

class UserModelRepository implements UserModelRepositoryInterface
{
    public function find($email)
    {
        $user = User::where('email', $email)->first();
            if(null === $user) {
                return null;
            } else {
                $user_id = $user->toArray()['user_id'];
                return $user_id;
            }
    }
}
