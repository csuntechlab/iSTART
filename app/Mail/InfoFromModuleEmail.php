<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class InfoFromModuleEmail extends Mailable
{
    use Queueable, SerializesModels;

    public $infoFromModuleEmail;

    public function __construct($infoFromModuleEmail)
    {
        $this->infoFromModuleEmail = $infoFromModuleEmail;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject(config('mail.from.name'). ' progress.')->view('mail.InfoFromModuleEmail');
    }
}
