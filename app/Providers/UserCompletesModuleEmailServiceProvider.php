<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 3/29/19
 * Time: 9:46 AM
 */

namespace App\Providers;


use Illuminate\Support\ServiceProvider;

class UserCompletesModuleEmailServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind(
            'App\Contracts\UserCompletesModuleEmailContract',
            'App\Services\UserCompletesModuleEmailService'
        );
    }
}