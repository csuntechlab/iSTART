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
        $user->load('getUserGroup');
        $currentModule = ModuleProgress::where('completed_at', '!=', NULL)->orderBy('created_at', 'DESC')->find($user['user_id']);
        $ParticipantID = Participant::find($user['user_id']);
        $userCompletesModuleEmailToAdmin = new \stdClass();
        $userCompletesModuleEmailToAdmin->student = $user->getUserGroup->display_name;
        $userCompletesModuleEmailToAdmin->current_module = $currentModule['current_module'];
        Mail::to((env('RECEIVE_EMAIL')))->send(new UserCompletesModuleEmailToAdmin($userCompletesModuleEmailToAdmin));

    }

    public function sendMailToStudent()
    {
        $user = auth()->user();
        $user->load('getUserGroup');
        $currentModule = ModuleProgress::where('completed_at', '!=', NULL)->orderBy('created_at', 'DESC')->find($user['user_id']);
        $userCompletesModuleEmailToStudent = new \stdClass();
        $userCompletesModuleEmailToStudent->student = $user->getUserGroup->display_name;
        $userCompletesModuleEmailToStudent->current_module = $currentModule['current_module'];
        Mail::to($user['email'])->send(new UserCompletesModuleEmailToStudent($userCompletesModuleEmailToStudent));
    }
}
