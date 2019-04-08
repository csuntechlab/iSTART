<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class UserAssignedGroupEmailServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            'App\Contracts\UserAssignedGroupEmailContract',
            'App\Services\UserAssignedGroupEmailService'
        );
    }
}