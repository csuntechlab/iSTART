<?php

use Illuminate\Database\Seeder;

class UserResearchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_research')->insert([
            'user_id' => '789',
            'research_id' => '9789'
        ]);
    }
}
