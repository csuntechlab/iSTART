<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class UserRoleServiceProvider extends ServiceProvider
{
    public function register(){
        $this->app->bind(
            'App\Contracts\UserRoleContracts',
            'App\Services\UserRoleServices'
        );
    }
}
