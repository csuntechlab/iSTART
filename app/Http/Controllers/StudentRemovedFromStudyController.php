<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contracts\StudentRemovedFromStudyContract;

class StudentRemovedFromStudyController extends Controller
{
    protected $studentRemovedFromStudyUtility;

    public function __construct(StudentRemovedFromStudyContract $studentRemovedFromStudyUtility)
    {
        $this->studentRemovedFromStudyUtility = $studentRemovedFromStudyUtility;
    }

    public function sendStudentRemovedMail()
    {
        return $this->studentRemovedFromStudyUtility->sendStudentRemovedMail();
    }
}
