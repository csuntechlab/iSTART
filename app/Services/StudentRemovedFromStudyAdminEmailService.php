<?php


namespace App\Services;


use App\Contracts\StudentRemovedFromStudyAdminEmailContract;
use App\Mail\StudentRemovedFromStudyAdminEmail;
use App\Models\UserGroup;
use App\Models\Participant;
use Illuminate\Support\Facades\Mail;

class StudentRemovedFromStudyAdminEmailService implements StudentRemovedFromStudyAdminEmailContract
{

    public function sendStudentRemovedFromStudyAdmin()
    {
        $user = auth()->user();
        $userGroup = UserGroup::find($user['user_id']);
        $participantID = Participant::find($user['user_id']);
        $studentRemovedFromStudyAdminEmail = new \stdClass();
        $studentRemovedFromStudyAdminEmail->user_group = $userGroup['user_group'];
        $studentRemovedFromStudyAdminEmail->participant_id = $participantID['participant_id'];
        Mail::to((env('RECIEVE_EMAIL')))->send(new StudentRemovedFromStudyAdminEmail($studentRemovedFromStudyAdminEmail));

        return 'true';
    }
}