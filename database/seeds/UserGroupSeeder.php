<?php

declare(strict_types=1);

use Illuminate\Database\Seeder;

class UserGroupSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('user_groups')->insert([
            'user_group' => 'comparison',
            'user_id' => 'nr_cyndee.bellamy@csun.edu',
            'display_name' => 'Cyndee Bellamy',
            'remember_token' => '12394iresjntgruirf9eiokwj',
        ]);
    }
}
