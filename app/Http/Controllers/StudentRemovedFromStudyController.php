<?php

namespace App\Http\Controllers;

use App\Contracts\StudentRemovedFromStudyContract;
use Illuminate\Http\Request;
use App\Contracts\StudentRemovedFromStudyAdminEmailContract;

class StudentRemovedFromStudyController extends Controller
{
    protected $studentRemovedFromStudyAdminEmailUtility;
    protected $studentRemovedFromStudyEmailUtility;

    public function __construct(StudentRemovedFromStudyAdminEmailContract $studentRemovedFromStudyAdminEmailUtility, StudentRemovedFromStudyContract $studentRemovedFromStudyEmailUtility)
    {
        $this->studentRemovedFromStudyAdminEmailUtility = $studentRemovedFromStudyAdminEmailUtility;
        $this->studentRemovedFromStudyEmailUtility = $studentRemovedFromStudyEmailUtility;
    }

    public function sendStudentRemovedMail()
    {
        return $this->studentRemovedFromStudyEmailUtility->sendStudentRemovedMail();
    }

    public function sendStudentRemovedFromStudyAdmin()
    {
        return $this->studentRemovedFromStudyAdminEmailUtility->sendStudentRemovedFromStudyAdmin();
    }
}
