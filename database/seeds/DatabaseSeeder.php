<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(ResearchSeeder::class);
        $this->call(UserGroupSeeder::class);
        $this->call(ModuleProgressSeeder::class);
    }
}
