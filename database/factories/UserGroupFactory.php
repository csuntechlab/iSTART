<?php

declare(strict_types=1);

use Faker\Generator as Faker;

$factory->define(App\Models\UserGroup::class, function (Faker $faker) {
    return [
        'user_id' => 'members:000022545',
        'user_group' => 'comparison',
        'display_name' => 'Cyndee Bellamy',
        'remember_token' => '12394iresjntgruirf9eiokwj',
    ];
});
