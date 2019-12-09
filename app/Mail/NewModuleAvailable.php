<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;

class NewModuleAvailable extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $NewModuleAvailable;

    public function __construct($NewModuleAvailable)
    {
        $this->NewModuleAvailable = $NewModuleAvailable;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject(config('mail.from.name'). ' new module is ready for you.')->view('mail.NewModuleAvailable');
    }
}
