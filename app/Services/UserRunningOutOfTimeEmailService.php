<?php

namespace App\Services;

use App\Contracts\UserRunningOutOfTimeEmailContract;
use Illuminate\Support\Facades\Mail;
use App\Models\ModuleProgress;
use App\Models\Participant;
use App\Mail\UserRunningOutOfTimeEmail;

class UserRunningOutOfTimeEmailService implements UserRunningOutOfTimeEmailContract
{
    public function sendMail($userId)
    {
        $currentModule = ModuleProgress::find($userId);
        $userRunningOutOfTimeEmail = new \stdClass();
        $userRunningOutOfTimeEmail->current_module = $currentModule['current_module'];
        Mail::to((env('RECEIVE_EMAIL')))->send(new UserRunningOutOfTimeEmail($userRunningOutOfTimeEmail));
    }
}
