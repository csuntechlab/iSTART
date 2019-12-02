<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Contracts\StudentRemovedFromStudyAdminEmailContract;
use App\Contracts\StudentRemovedFromStudyContract;
use App\Mail\GenericEmail;
use App\Models\User;

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

    protected $studentRemovedFromStudyAdminEmailUtility;

    protected $studentRemovedFromStudyEmailUtility;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(StudentRemovedFromStudyAdminEmailContract $studentRemovedFromStudyAdminEmailUtility, StudentRemovedFromStudyContract $studentRemovedFromStudyEmailUtility)
    {
        parent::__construct();
        $this->studentRemovedFromStudyAdminEmailUtility = $studentRemovedFromStudyAdminEmailUtility;
        $this->studentRemovedFromStudyEmailUtility = $studentRemovedFromStudyEmailUtility;
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
            $q->orderBy('created_at', 'DESC')->first();
        }])->whereHas('moduleProgress')->get();
        // get calls always return something
        if (!empty($users)) {
            foreach ($users as $user) {
                if (!empty($user->moduleProgress)) {
                    $currentModule = $user->moduleProgress->first();
                    $dayCheck = $currentModule->created_at->diffInDays($currentModule->expires_at);
                    if ($dayCheck === 2 || $dayCheck === 1) {
                        // send out the email.
                        Mail::to((env('RECIEVE_EMAIL')))->send(new UserRunningOutOfTimeEmail($user));
                    }
                    if ($dayCheck === 0) {
                        if ($currentModule->current_page !== $currentModule->max_page) {
                            $this->studentRemovedFromStudyEmailUtility->sendStudentRemovedMail();
                            $this->studentRemovedFromStudyEmailUtility->sendStudentRemovedFromStudyAdmin();
                        }
                    }
                }
            }
        }
    }
}