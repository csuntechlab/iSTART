<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;


class UserRunningOutOfTimeEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $userRunningOutOfTimeEmail;

    public function __construct($userRunningOutOfTimeEmail)
    {
        $this->userRunningOutOfTimeEmail = $userRunningOutOfTimeEmail;
    }

    public function build()
    {
        return $this->view('mail.UserRunningOutOfTimeEmail');
    }
}