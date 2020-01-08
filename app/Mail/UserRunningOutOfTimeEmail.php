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

    public function __construct($userRunningOutOfTimeEmail, $currentModule)
    {
        $this->userRunningOutOfTimeEmail = $userRunningOutOfTimeEmail;
        $this->userRunningOutOfTimeEmail->current_module = $currentModule;
    }

    public function build()
    {
        return $this->subject(config('mail.from.name').' -- Reminder, please complete the module.')->view('mail.UserRunningOutOfTimeEmail');
    }
}
