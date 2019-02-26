<?php

declare(strict_types=1);

use Faker\Generator as Faker;

$factory->define(App\Models\UserRoles::class, function (Faker $faker) {
    return [
        'user_email' => 'someone@face.com',
        'user_role' => 'comparison',
        'display_name' => 'Cyndee Bellamy',
        'remember_token' => '12394iresjntgruirf9eiokwj',
    ];
});
