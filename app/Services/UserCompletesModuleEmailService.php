<?php


namespace App\Services;

use Illuminate\Support\Facades\Mail;
use App\Contracts\UserCompletesModuleEmailContract;
use App\Models\ModuleProgress;
use App\Models\Participant;
use App\Mail\UserCompletesModuleEmail;
use App\Http\Controllers\UserCompletesModuleEmailController;

class UserCompletesModuleEmailService implements UserCompletesModuleEmailContract
{
    public function sendMail()
    {
        $user = auth()->user();
        $currentModule = ModuleProgress::find($user['user_id']);
        $ParticipantID = Participant::find($user['user_id']);
        $userCompletesModuleEmail = new \stdClass();
        $userCompletesModuleEmail->current_module = $currentModule['current_module'];
        $userCompletesModuleEmail->participant_id = $ParticipantID['participant_id'];
        Mail::to((env('RECIEVE_EMAIL')))->send(new UserCompletesModuleEmail($userCompletesModuleEmail));

    }
}