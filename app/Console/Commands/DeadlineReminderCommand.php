<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\StudentRemovedFromStudyAdminEmail;
use App\Mail\UserRunningOutOfTimeEmail;
use App\Models\User;

class DeadlineReminderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'istart:deadline-reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notifies users of the module deadline.';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        // Let's get the users that only have an actual Module
        $users = User::with(['moduleProgress' => function ($q) {
            $q->orderBy('created_at', 'DESC')->first();
        }, 'participant'])->whereHas('moduleProgress')->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (count($user->moduleProgress)) {
                    $currentModule = $user->moduleProgress->first();
                    $dayCheck = $currentModule->created_at->diffInDays($currentModule->expiration_date);
                    if ($dayCheck === 2 || $dayCheck === 1) {
                        // send out the email.
                        Mail::to($user->email)->send(new UserRunningOutOfTimeEmail($user));
                    }
                    if ($dayCheck === 0) {
                        if ($currentModule->current_page === 0 && $currentModule->max_page === 0) {
                            Mail::to((env('RECIEVE_EMAIL')))->send(new StudentRemovedFromStudyAdminEmail($user));
                        }
                    }
                }
            }
        }
    }
}
