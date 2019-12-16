<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class StudentRemovedFromStudyAdminEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $studentRemovedFromStudyAdminEmail;

    public function __construct($studentRemovedFromStudyAdminEmail, $currentModule)
    {
        $this->studentRemovedFromStudyAdminEmail = $studentRemovedFromStudyAdminEmail;
        $his->studentRemovedFromStudyAdminEmail->current_module = $currentModule;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject(config('mail.from.name'). ' student removed from study.')->view('mail.StudentRemovedFromStudyAdminEmail');
    }
}
