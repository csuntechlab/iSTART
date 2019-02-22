<?php

declare(strict_types=1);

use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        DB::table('user_roles')->insert([
            'user_email' => 'nr_cyndee.bellamy@csun.edu',
            'user_role' => 'comparison',
            'display_name' => 'Cyndee Bellamy',
            'password' => 'yungbasedGod',
            'remember_token' => '12394iresjntgruirf9eiokwj',
        ]);
    }
}
