<?php

namespace App\Console\Commands;

use App\Mail\StudentRemovedFromStudyAdminEmail;
use App\Mail\UserHas24HoursLeftEmail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserHasntLoggedInEmail;
use App\Models\User;
use Carbon\Carbon;

class LoginReminderCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'istart:login-reminder';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notifies users to log-in to the application.';

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
        // Let's get the users that do not have a Module
        $users = User::with(['participant', 'moduleProgress', 'getUserGroup'])
            ->whereHas('participant')
            ->whereHas('getUserGroup', function($q) {
                $q->where('user_group', '!=', 'control');
            })
            ->doesntHave('moduleProgress')
            ->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (count($user->moduleProgress) === 0) {
                    $today = Carbon::now(config('app.user_timezone'));
                    $then = Carbon::parse($user->participant->created_at)->setTimezone(config('app.user_timezone'));
                    $dayCheck = $today->diffInDays($then);
                    if ($user->getUserGroup->user_group === 'intervention' || $user->getUserGroup === null) {
                        if ($dayCheck === (config('app.days_to_expire') - 2) || $dayCheck === (config('app.days_to_expire') - 3)) {
                            // send out the email.
                            Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHasntLoggedInEmail($user));
                        } else if ($dayCheck === (config('app.days_to_expire') - 1)) {
                            Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHas24HoursLeftEmail($user));
                        } else if ($dayCheck >= config('app.days_to_expire')) {
                            // send out the student has been removed email.
                            Mail::to(env('RECEIVE_EMAIL'))->send(new StudentRemovedFromStudyAdminEmail($user, null));
                            $user->participant()->delete();
                        }
                    } else {
                        if ($dayCheck === (30 / 2) || $dayCheck === (30 / 3) || $dayCheck === (30 / 6)) {
                            // send out the email.
                            Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHasntLoggedInEmail($user));
                        } else if ($dayCheck === (30 - 1)) {
                            Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHas24HoursLeftEmail($user));
                        } else if ($dayCheck >= 30) {
                            // send out the student has been removed email.
                            Mail::to(env('RECEIVE_EMAIL'))->send(new StudentRemovedFromStudyAdminEmail($user, null));
                            $user->participant()->delete();
                        }
                    }
                }
            }
        }
    }
}
