<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Mail\NewModuleAvailable;
use Carbon\Carbon;

class NewModuleCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'istart:new-module';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notifies users of new available module';

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
            $q->whereNotNull('completed_at')->orderBy('created_at', 'DESC')->first();
        }])->whereHas('moduleProgress')->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (count($user->moduleProgress)) {
                    $currentModule = $user->moduleProgress->first();
                    if ($currentModule !== null) {
                        if ($currentModule->current_page !== 0 && ($currentModule->current_page === $currentModule->max_page)) {
                            $dayCheck = Carbon::now()->diffInDays($currentModule->expiration_date);
                            if ($dayCheck === 0) {
                                // send out the email.
                                // Mail::to($user->email)->send(new NewModuleAvailable($user));
                                Mail::to((env('RECEIVE_EMAIL')))->send(new NewModuleAvailable($user));
                            }
                        }
                    }
                }
            }
        }
    }
}
