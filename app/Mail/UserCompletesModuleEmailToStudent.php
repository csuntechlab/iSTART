<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 3/29/19
 * Time: 10:18 AM
 */

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;


class UserCompletesModuleEmailToStudent extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $userCompletesModuleEmailToStudent;

    public function __construct($userCompletesModuleEmailToStudent)
    {
        $this->userCompletesModuleEmailToStudent = $userCompletesModuleEmailToStudent;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject(config('mail.from.name'). ' module completion confirmation')->view('mail.UserCompletesModuleEmailToStudent');
    }
}
