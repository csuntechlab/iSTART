<?php

namespace App\Jobs;

use App\Models\Participant;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;
use App\Mail\GenericEmail;
use Illuminate\Support\Facades\Log;
class RemoveParticipantFromStudy implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries = 3;
    protected $user;
    /**
     * Create a new job instance.
     *
     * @return void
     */

    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $user = $this->user;

        //Mail::to((env('RECIEVE_EMAIL')))->send(new GenericEmail($user));



    }
}
