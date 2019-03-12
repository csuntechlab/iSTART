<?php

use Illuminate\Database\Seeder;

class ResearchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     */
    public function run()
    {
        DB::table('research')->insert([
            'user_id' => 'members:000022996',
            'research_id' => '9789'
        ]);
        DB::table('research')->insert([
            'user_id' => 'members:000021315',
            'research_id' => '04'
        ]);
        DB::table('research')->insert([
            'user_id'=>'members:100010526',
            'research_id' => '10'
        ]);
    }
}
