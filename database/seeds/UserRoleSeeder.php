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
            'user_role' => 'comparison',
            'user_email' => 'nr_cyndee.bellamy@csun.edu',
            'display_name' => 'Cyndee Bellamy',
            'password' => 'yungbasedgod',
            'remember_token' => '12394iresjntgruirf9eiokwj',
        ]);
    }
}
