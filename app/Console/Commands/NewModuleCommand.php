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
                $q->orderBy('created_at', 'DESC');
            }, 'participant'])
            ->whereHas('moduleProgress', function ($q) {
                $q->where('current_module', '!=', 'comparison');
            })
            ->whereHas('participant')
            ->get();
        // get calls always return something
        $today = Carbon::now();
        if (!empty($users)) {
            foreach ($users as $user) {
                if (!is_null($user->participant)) {
                    if (count($user->moduleProgress)) {
                        $currentModule = $user->moduleProgress->first();
                        if ($currentModule->completed_at === null && ($currentModule->current_page === 0 && $currentModule->max_page === 0)) {
                            $then = Carbon::parse($currentModule->created_at);
                            $dayCheck = $today->diffInDays($then);
                            if ($dayCheck === config('app.days_to_release')) {
                                Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new NewModuleAvailable($currentModule->current_module));
                            }
                        }
                    }
                }
            }
        }
    }
}
