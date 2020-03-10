<?php

namespace App\Console\Commands;

use App\Mail\UserHas24HoursLeftEmail;
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
            $q->orderBy('created_at', 'DESC');
        }, 'getUserGroup', 'participant'])
            ->whereHas('getUserGroup', function ($q) {
                $q->where('user_group', '!=', 'control');
            })
            ->whereHas('participant')
            ->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (!is_null($user->participant)) {
                    if (count($user->moduleProgress)) {
                        $currentModule = $user->moduleProgress->first();
                        if ($currentModule) {
                            // we want to check today's date vs the expiration date of the module.
                            $convertedTime = Carbon::parse($currentModule->expiration_date)->setTimezone(config('app.user_timezone'));
                            $dayCheck = Carbon::now(config('app.user_timezone'))->diffInDays($convertedTime);
                            if ($dayCheck === 0) {
                                $user->participant()->delete();
                                Mail::to(env('RECEIVE_EMAIL'))->send(new StudentRemovedFromStudyAdminEmail($user, $currentModule->current_module));
                            } else if ($dayCheck === 1) {
                                Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHas24HoursLeftEmail($user));
                            } else {
                                if ($user->getUserGroup->user_group !== 'intervention') {
                                    if ($dayCheck === 4 || $dayCheck === 5 || $dayCheck === 3) {
                                        Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserRunningOutOfTimeEmail($user, $currentModule->current_module));
                                    }
                                } else {
                                    if ($dayCheck === 15 || $dayCheck === 10 || $dayCheck === 5)  {
                                        Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserRunningOutOfTimeEmail($user, $currentModule->current_module));
                                    }
                                }
                            }
                        }
                    } else {
                        // no module available but they have logged in at least
                        $loggedInTime = Carbon::parse($user->getUserGroup->created_at)->setTimezone('app.user_timezone');
                        $dayCheck = Carbon::now(config('app.user_timezone'))->diffInDays($loggedInTime);
                        if ($dayCheck === 4 || $dayCheck === 5 || $dayCheck === 3) {
                            Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserRunningOutOfTimeEmail($user, $currentModule->current_module));
                        } else if ($dayCheck == 1) {
                            Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHas24HoursLeftEmail($user));
                        }
                    }
                }
            }
        }
    }
}
