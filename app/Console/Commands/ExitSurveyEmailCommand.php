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
        $users = User::with([
                'participant',
                'getUserGroup',
                'moduleProgress' => function ($q) {
                    $q->orderBy('created_at', 'DESC');
                }
            ])
            ->whereHas('getUserGroup')
            ->whereHas('participant')
            ->whereHas('moduleProgress')
            ->get();
        $today = Carbon::now(config('app.user_timezone'));
        if (count($users)) {
            foreach($users as $user) {
                if (!is_null($user->participant)) {
                    $convertedTime = Carbon::parse($user->participant->created_at)->setTimezone(config('app.user_timezone'));
                    $difference = $today->diffInDays($convertedTime);
                    if ($difference === 30) {
                        if ($user->getUserGroup->user_group === 'control') {
                            $this->sendEmail($user);
                        } else if ($user->getUserGroup->user_group === 'comparison') {
                            $lastModule = $user->moduleProgress->first();
                            if (!is_null($lastModule->completed_at)) {
                                $this->sendEmail($user);
                            }
                        } else {
                            if (count($user->moduleProgress) === 5) {
                                $lastModule = $user->moduleProgress->first();
                                if (!is_null($lastModule->completed_at)) {
                                    $this->sendEmail($user);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Sends out the actual Email
     * @param  App\Models\User $user instance of one user
     * @return void
     */
    private function sendEmail($user)
    {
        Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new ExitSurveyEmail($user));
    }
}
