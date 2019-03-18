<?php

declare(strict_types=1);

use Faker\Generator as Faker;

$factory->define(App\Models\ModuleProgress::class, function (Faker $faker) {
    return [
        'user_id' => '1',
        'current_module' => 'drugs',
        'current_page' => 7,
        'max_page' => 17,
    ];
});