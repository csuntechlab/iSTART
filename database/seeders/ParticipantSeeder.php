<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ParticipantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     */
    public function run()
    {
        DB::table('participant')->insert([
            'user_id' => 'members:000022996',
            'participant_id' => '9789'
        ]);
        DB::table('participant')->insert([
            'user_id' => 'members:000021315',
            'participant_id' => '04'
        ]);
        DB::table('participant')->insert([
            'user_id'=>'members:100010526',
            'participant_id' => '10'
        ]);
        DB::table('participant')->insert([
            'user_id' => 'members:000022575',
            'participant_id' => '210'
        ]);
        DB::table('participant')->insert([
            'user_id' => 'members:000022219',
            'participant_id' => '32'
        ]);



    }
}
