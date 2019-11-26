<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserHasntLoggedInEmail;
use App\Models\User;
use App\Models\UserGroup;
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
        $users = User::doesntHave('moduleProgress')->get();
        // get calls always return something
        if (!empty($users)) {
            Mail::to(env('ADMIN_LIST'))->send(new UserHasntLoggedInEmail($users));
            foreach ($users as $user) {
                $userGroup = UserGroup::where('user_id', $user->user_id)->first();
                $dayCheck = (Carbon::now()->diffInDays($userGroup->created_at));
                if ($dayCheck == 3) {
                    // send out the email.
                    Mail::to(env('RECIEVE_EMAIL'))->send(new UserHasntLoggedInEmail($user));
                }
            }
        }
    }
}
