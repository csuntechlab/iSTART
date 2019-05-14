<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class StudentRemovedFromStudyAdminEmailServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(
            'App\Contracts\StudentRemovedFromStudyAdminEmailContract',
            'App\Services\StudentRemovedFromStudyAdminEmailService'
        );    }
}
