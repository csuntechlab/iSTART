<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class ExitSurveyEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $subject = config('mail.from.name');
        if ($this->user->getUserGroup->user_group === 'control') {
            $subject .= ' - Exit Survey';
        } else if ($this->user->getUserGroup->user_group === 'comparison') {
            $subject .= ' - Stuff';
        } else {
            $subject .= ' - You have completed all the modules!';
        }
        return $this->subject($subject)->view('mail.exitsurvey');
    }
}
