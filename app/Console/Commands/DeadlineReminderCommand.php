<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\StudentRemovedFromStudyAdminEmail;
use App\Mail\UserRunningOutOfTimeEmail;
use App\Models\User;
use Carbon\Carbon;

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
            $q->whereNull('completed_at')->orderBy('created_at', 'DESC');
        }, 'getUserGroup' => function ($q) {
            $q->where('user_group', '!=', 'control');
        }, 'participant'])->whereHas('moduleProgress')->whereHas('getUserGroup')->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (!is_null($user->participant)) {
                    if (count($user->moduleProgress)) {
                        foreach ($user->moduleProgress as $currentModule) {
                            // we want to check today's date vs the expiration date of the module.
                            $convertedTime = Carbon::parse($currentModule->expiration_date)->setTimezone(config('app.user_timezone'));
                            $dayCheck = Carbon::now(config('app.user_timezone'))->diffInDays($convertedTime);
                            if ($dayCheck === 0) {
                                $user->participant()->delete();
                                Mail::to(env('RECEIVE_EMAIL'))->send(new StudentRemovedFromStudyAdminEmail($user, $currentModule->current_module));
                            }
                            if ($user->getUserGroup->user_group !== 'comparison') {
                                if ($dayCheck === 2 || $dayCheck === 1) {
                                    Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserRunningOutOfTimeEmail($user, $currentModule->current_module));
                                }
                            } else {
                                if ($dayCheck === 10 || $dayCheck === 3)  {
                                    Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserRunningOutOfTimeEmail($user, $currentModule->current_module));
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
