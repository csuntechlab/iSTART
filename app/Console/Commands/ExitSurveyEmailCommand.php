<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Models\User;
use App\Mail\ExitSurveyEmail;
use Carbon\Carbon;


class ExitSurveyEmailCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'istart:exit-survey';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sends out the exit survey.';

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
        $users = User::with('participant', 'getUserGroup')->whereHas('getUserGroup')->get();
        $today = Carbon::now();
        if (count($users)) {
            foreach($users as $user) {
                if ($user->getUserGroup->user_group === 'control' || $user->getUserGroup->user_group === 'comparison') {
                    $difference = $today->diffInDays($user->participant->created_at);
                    if ($difference === 30) {
                        Mail::to($user->email)->send(new ExitSurveyEmail());
                    }
                }
            }
        }
    }
}
