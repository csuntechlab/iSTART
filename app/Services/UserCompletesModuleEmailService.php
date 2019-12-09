<?php


namespace App\Services;

use Illuminate\Support\Facades\Mail;
use App\Contracts\UserCompletesModuleEmailContract;
use App\Models\ModuleProgress;
use App\Models\Participant;
use App\Mail\UserCompletesModuleEmailToAdmin;
use App\Mail\UserCompletesModuleEmailToStudent;

class UserCompletesModuleEmailService implements UserCompletesModuleEmailContract
{
    public function sendMailToAdmin()
    {
        $user = auth()->user();
        $currentModule = ModuleProgress::find($user['user_id']);
        $ParticipantID = Participant::find($user['user_id']);
        $userCompletesModuleEmailToAdmin = new \stdClass();
        $userCompletesModuleEmailToAdmin->current_module = $currentModule['current_module'];
        $userCompletesModuleEmailToAdmin->participant_id = $ParticipantID['participant_id'];
        Mail::to((env('RECEIVE_EMAIL')))->send(new UserCompletesModuleEmailToAdmin($userCompletesModuleEmailToAdmin));

    }

    public function sendMailToStudent()
    {
        $user = auth()->user();
        $currentModule = ModuleProgress::find($user['user_id']);
        $userCompletesModuleEmailToStudent = new \stdClass();
        $userCompletesModuleEmailToStudent->current_module = $currentModule['current_module'];
        if((env('APP_ENV') === 'production')) {
            Mail::to($user['email'])->send(new UserCompletesModuleEmailToStudent($userCompletesModuleEmailToStudent));
        } else {
            Mail::to((env('RECEIVE_EMAIL')))->send(new UserCompletesModuleEmailToStudent($userCompletesModuleEmailToStudent));
        }
    }
}
