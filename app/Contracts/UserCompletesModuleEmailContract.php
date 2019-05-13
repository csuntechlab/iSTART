<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 3/29/19
 * Time: 9:41 AM
 */

namespace App\Contracts;


interface UserCompletesModuleEmailContract
{
    public function sendMailToAdmin();

    public function sendMailToStudent();
}