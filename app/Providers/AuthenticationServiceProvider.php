<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 2/18/19
 * Time: 5:02 PM
 */

namespace App\Providers;


use Illuminate\Support\ServiceProvider;

class AuthenticationServiceProvider extends ServiceProvider
{

    public function register()
    {
        $this->app->bind(
            'App\Contracts\AuthenticationContract',
            'App\Services\AuthenticationService'
        );
    }

}