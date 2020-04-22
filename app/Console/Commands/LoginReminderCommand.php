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
        // Let's get the users who have not been randomized
        $users = User::with(['participant', 'getUserGroup'])
            ->whereHas('participant')
            ->doesntHave('getUserGroup')
            ->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                $today = Carbon::now(config('app.user_timezone'))->startOfDay();
                $then = Carbon::parse($user->participant->created_at)->setTimezone(config('app.user_timezone'))->startOfDay();
                $dayCheck = $today->diffInDays($then);
                if ($user->getUserGroup === null) {
                    if ($dayCheck == 3 || $dayCheck == 5) {
                        // send out the email.
                        Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHasntLoggedInEmail($user));
                    } else if ($dayCheck == 6) {
                        Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHas24HoursLeftEmail($user));
                    } else if ($dayCheck >= config('app.days_to_expire')) {
                        // send out the student has been removed email.
                        Mail::to(env('RECEIVE_EMAIL'))->send(new StudentRemovedFromStudyAdminEmail($user, null));
                        $user->participant()->delete();
                    }
                }
            }
        }
    }
}
