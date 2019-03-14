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
            'user_role' => '',
            'user_id' => '1',
            'display_name' => 'Cyndee Bellamy',
            'remember_token' => '12394iresjntgruirf9eiokwj',
        ]);
    }
}
