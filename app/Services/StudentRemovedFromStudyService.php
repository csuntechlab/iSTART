<?php

namespace App\Services;

use App\Mail\StudentRemovedFromStudy;
use Illuminate\Support\Facades\Mail;
use App\Contracts\StudentRemovedFromStudyContract;

class StudentRemovedFromStudyService implements StudentRemovedFromStudyContract
{
    public function sendStudentRemovedMail()
    {

        Mail::to((env('RECEIVE_EMAIL')))->send(new StudentRemovedFromStudy());

        return 'true';
    }
}
