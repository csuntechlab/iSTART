<?php

use Illuminate\Database\Seeder;

class UserRoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('user_roles')->insert([
            'user_email' => 'nr_cyndee.bellamy@csun.edu',
            'user_role' => 'comparison'
        ]);
    }
}
