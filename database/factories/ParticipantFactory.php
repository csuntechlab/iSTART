<?php

use Faker\Generator as Faker;

$factory->define(App\Models\Participant::class, function (Faker $faker) {
    return [
        'user_id' => 'members:100010526',
        'participant_id' => '079'
    ];
});
