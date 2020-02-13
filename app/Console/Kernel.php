<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('istart:deadline-reminder')
                ->timezone(config('app.user_timezone'))
                ->dailyAt('08:00');
        $schedule->command('istart:new-module')
                ->timezone(config('app.user_timezone'))
                ->dailyAt('08:10');
        $schedule->command('istart:login-reminder')
                ->timezone(config('app.user_timezone'))
                ->dailyAt('08:20');
        $schedule->command('istart:exit-survey')
                ->timezone(config('app.user_timezone'))
                ->dailyAt('08:30');

    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
