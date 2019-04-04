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


class UserCompletesModuleEmail extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $userCompletesModuleEmail;

    public function __construct($userCompletesModuleEmail)
    {
        $this->userCompletesModuleEmail = $userCompletesModuleEmail;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.UserCompletesModuleEmail');
    }
}