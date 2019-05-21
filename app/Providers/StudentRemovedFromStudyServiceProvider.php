<?php

namespace App\Providers;


use Illuminate\Support\ServiceProvider;

class StudentRemovedFromStudyServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            'App\Contracts\StudentRemovedFromStudyContract',
            'App\Services\StudentRemovedFromStudyService'
        );
    }
}