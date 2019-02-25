<?php

return [

	/*
    |--------------------------------------------------------------------------
    | Database password validation
    |--------------------------------------------------------------------------
    |
    | True to turn off password validation when retrieving a user record in the
    | database. When false, searching is done only with the username passed to
    | Auth::attempt(). Default is false.
    |
    */
    'allow_no_pass' => env("DBAUTH_ALLOW_NO_PASS", false),

    /*
    |--------------------------------------------------------------------------
    | Database auth username attribute
    |--------------------------------------------------------------------------
    |
    | This is the value that will be used to perform the search operation as
    | the username passed to the call to Auth::attempt().
    |
    | Default is "email".
    |
    */
    'username' => env("DBAUTH_USERNAME", "email"),

    /*
    |--------------------------------------------------------------------------
    | Database auth password attribute
    |--------------------------------------------------------------------------
    |
    | This is the value that will be used to perform the password validation as
    | the password passed to the call to Auth::attempt().
    |
    | Default is "password".
    |
    */
    'password' => env("DBAUTH_PASSWORD", "password"),

];