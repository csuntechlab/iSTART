<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class EmailServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            'App\Contracts\UserAssignedGroupEmailContract',
            'App\Services\UserAssignedGroupEmailService'
        );
        $this->app->bind(
            'App\Contracts\UserCompletesModuleEmailContract',
            'App\Services\UserCompletesModuleEmailService'
        );
        $this->app->bind(
            'App\Contracts\UserRunningOutOfTimeEmailContract',
            'App\Services\UserRunningOutOfTimeEmailService'
        );
        $this->app->bind(
            'App\Contracts\InfoFromModuleEmailContract',
            'App\Services\InfoFromModuleEmailService'
        );
    }
}