<?php

declare(strict_types=1);

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class UserRoleServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            'App\Contracts\UserRoleContract',
            'App\Services\UserRoleService'
        );
    }
}
