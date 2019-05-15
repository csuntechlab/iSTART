<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contracts\StudentRemovedFromStudyAdminEmailContract;

class StudentRemovedFromStudyController extends Controller
{
    protected $studentRemovedFromStudyAdminEmailUtility;

    public function __construct(StudentRemovedFromStudyAdminEmailContract $studentRemovedFromStudyAdminEmailUtility)
    {
        $this->studentRemovedFromStudyAdminEmailUtility = $studentRemovedFromStudyAdminEmailUtility;
    }
    public function sendStudentRemovedFromStudyAdmin()
    {
        return $this->studentRemovedFromStudyAdminEmailUtility->sendStudentRemovedFromStudyAdmin();
    }
}
