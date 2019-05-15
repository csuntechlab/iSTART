<?php

namespace App\Contracts;


interface UserRunningOutOfTimeEmailContract
{
    public function sendMail($userId);
}