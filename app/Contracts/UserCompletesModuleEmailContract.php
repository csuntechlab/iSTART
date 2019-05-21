<?php


namespace App\Contracts;


interface UserCompletesModuleEmailContract
{
    public function sendMailToAdmin();

    public function sendMailToStudent();
}