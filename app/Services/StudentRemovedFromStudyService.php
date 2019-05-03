<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 5/3/19
 * Time: 11:01 AM
 */

namespace App\Services;

use App\Mail\StudentRemovedFromStudy;
use Illuminate\Support\Facades\Mail;
use App\Contracts\StudentRemovedFromStudyContract;

class StudentRemovedFromStudyService implements StudentRemovedFromStudyContract
{
    public function sendStudentRemovedMail()
    {

        Mail::to((env('RECIEVE_EMAIL')))->send(new StudentRemovedFromStudy());

        return 'true';
    }
}