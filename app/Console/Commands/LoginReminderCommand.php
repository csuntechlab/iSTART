<?php

namespace App\Console\Commands;

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
        $users = User::with('participant')
            ->whereHas('participant')
            ->doesntHave('getUserGroup')
            ->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (!is_null($user->participant)) {
                    $today = Carbon::now(config('app.user_timezone'));
                    $then = Carbon::parse($user->participant->created_at)->setTimezone(config('app.user_timezone'));
                    $dayCheck = $today->diffInDays($then);
                    if ($dayCheck === 3 || $dayCheck === 5) {
                        // send out the email.
                        Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new UserHasntLoggedInEmail($user));
                    }
                }
            }
        }
    }
}
