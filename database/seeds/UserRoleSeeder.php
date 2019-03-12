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
            'user_id' => 'members:000022431',
            'display_name' => 'Cyndee Bellamy',
            'remember_token' => '12394iresjntgruirf9eiokwj',
        ]);
        DB::table('user_roles')->insert([
            'user_role' => 'intervention',
            'user_id' => 'members:000021315',
            'display_name' => 'April Feldman',
            'remember_token' => 'yayeet2930290',
        ]);
        DB::table('user_roles')->insert([
            'user_role' => 'control',
            'user_id' => 'members:000022996',
            'display_name' => 'Alice Lu',
            'remember_token' => 'nanaenae1930209',
        ]);
    }
}
