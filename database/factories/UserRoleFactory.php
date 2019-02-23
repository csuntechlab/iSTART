<?php

declare(strict_types=1);

use Faker\Generator as Faker;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(App\Models\UserRoles::class, function (Faker $faker) {
    return [
        'user_email' => 'someone@face.com',
        'user_role' => 'comparison',
        'display_name' => 'Cyndee Bellamy',
        'password' => '$2y$10$TKh8H1.PfQx37YgCzwiKb.KjNyWgaHb9cbcoQgdIVFlYg7B77UdFm',
        'remember_token' => '12394iresjntgruirf9eiokwj',
    ];
});
