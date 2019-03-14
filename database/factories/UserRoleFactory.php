<?php

declare(strict_types=1);

use Faker\Generator as Faker;

$factory->define(App\Models\UserRoles::class, function (Faker $faker) {
    return [
        'user_id' => 'members:12345',
        'user_role' => null,
        'display_name' => 'Cyndee Bellamy',
        'remember_token' => '12394iresjntgruirf9eiokwj',
    ];
});
