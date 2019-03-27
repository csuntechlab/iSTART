<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 3/27/19
 * Time: 2:51 PM
 */

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