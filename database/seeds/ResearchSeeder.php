<?php

use Illuminate\Database\Seeder;

class ResearchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('research')->insert([
            'user_email' => '789@gmail.com',
            'research_id' => '9789'
        ]);
    }
}
