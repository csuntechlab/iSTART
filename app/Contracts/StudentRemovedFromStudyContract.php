<?php

namespace App\Contracts;


interface StudentRemovedFromStudyContract
{
    public function sendStudentRemovedMail();
}