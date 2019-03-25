<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class ModelRepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            'App\ModelRepositoryInterfaces\UserAdminModelRepositoryInterface',
            'App\ModelRepositories\UserAdminModelRepository'
        );
    }
}
