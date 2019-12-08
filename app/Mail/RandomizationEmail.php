<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class RandomizationEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    public $userInUserGroup;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user, $userInUserGroup)
    {
        $this->user = $user;
        $this->userInUserGroup = $userInUserGroup;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.randomizationEmail');
    }
}
