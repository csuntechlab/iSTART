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


class UserCompletesModuleEmailToAdmin extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $userCompletesModuleEmailToAdmin;

    public function __construct($userCompletesModuleEmailToAdmin)
    {
        $this->userCompletesModuleEmailToAdmin = $userCompletesModuleEmailToAdmin;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('mail.UserCompletesModuleEmailToAdmin');
    }
}