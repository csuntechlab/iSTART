<?php

namespace App\Jobs;

use App\Mail\NewModuleAvailable;
use App\Models\ModuleProgress;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;
class SendNewModuleEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    public $tries = 3;
    protected $user;
    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(ModuleProgress $user)
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
        $mail = $this->user;

        Mail::to((env('RECIEVE_EMAIL')))->send(new NewModuleAvailable($mail));


    }

    public function failed()
    {
        // Called when the job is failing...

    }
}
