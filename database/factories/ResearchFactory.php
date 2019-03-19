<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Research::class, function (Faker $faker) {
    return [
        'user_id' => 'members:100010526',
        'research_id' => '079'
    ];
});
