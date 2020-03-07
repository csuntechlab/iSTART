<?php

declare(strict_types=1);

namespace App\ModelRepositories;

use App\ModelRepositoryInterfaces\UserModelRepositoryInterface;
use App\Models\Participant;
use App\Models\User;
use Illuminate\Support\Str;

class UserModelRepository implements UserModelRepositoryInterface
{
    public function find($email)
    {
        $status = Str::contains($email, '@csun.edu');

        if ($status) {
            return null;
        }

        $user = User::where('email', $email)->first();

        if (null === $user) {
            return null;
        } else {
            $participant = Participant::find($user->user_id);
            if ($participant !== null) {
                $user_id = $user->toArray()['user_id'];
                return $user_id;
            }
            return null;
        }
    }
}
