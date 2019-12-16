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
            $q->where('current_module', '!=', 'comparison')->orderBy('created_at', 'DESC');
        }])->whereHas('moduleProgress')->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (count($user->moduleProgress) > 1) {
                    $currentModule = $user->moduleProgress->first();
                    $previousModule = $user->moduleProgress[1];
                    if ($currentModule->completed_at === null && ($currentModule->current_page === 0 && $currentModule->max_page === 0)) {
                        $dayCheck = Carbon::now()->addDays(config('app.days_to_release'))->diffInDays($previousModule->completed_at);
                        if ($dayCheck === 0) {
                            Mail::to($user->email)->send(new NewModuleAvailable($currentModule->current_module));
                        }
                    }
                }
            }
        }
    }
}
