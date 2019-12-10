<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;
use App\Mail\RandomizationEmail;
use App\Contracts\UserAssignedGroupEmailContract;

class UserAssignedGroupEmailService implements UserAssignedGroupEmailContract
{
    public function sendMail($user, $userInUserGroup)
    {
        Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new RandomizationEmail($user, $userInUserGroup));
        return 'true';
    }
}
