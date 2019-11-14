<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'user_id' => 'members:000022575',
            'username' => 'Cyndee Bellamy',
            'email' => 'brian.linggadjaja.785@my.csun.edu',
            'password' => bcrypt('password'),
            'remember_token' => '12394iresjntgruirf9eiokwj',
        ]);
        DB::table('users')->insert([
            'user_id' => 'members:000021315',
            'username' => 'April Feldman',
            'email' => 'jgarcia16432@gmail.com',
            'password' => bcrypt('password'),
            'remember_token' => 'yayeet2930290',
        ]);
        DB::table('users')->insert([
            'user_id' => 'members:000022996',
            'username' => 'Alice Lu',
            'email' => 'luis.guzman@metalab.csun.edu',
            'password' => bcrypt('password'),
            'remember_token' => 'nanaenae1930209',
        ]);
    }
}
