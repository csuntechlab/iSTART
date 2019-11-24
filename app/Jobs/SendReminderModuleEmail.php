<?php

namespace App\Jobs;

use App\Models\ModuleProgress;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\GenericEmail;
class SendReminderModuleEmail implements ShouldQueue
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
        $user = $this->user;

        $moduleCreated = $user->created_at;

        $moduleCreatedTimeStamp = Carbon::createFromTimeString($moduleCreated);

        $expirationTime = Carbon::now()->subDays(config('app.expires_at'));

        if($moduleCreatedTimeStamp->day == $expirationTime->day){

            Mail::to((env('RECIEVE_EMAIL')))->send(new GenericEmail($user));

        };

    }
}
