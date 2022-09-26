<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class ModuleProgressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('module_progresses')->insert([
            'user_id' => 'members:000022575',
            'current_module' => 'alcohol',
            'current_page' => '7',
            'max_page' => '17'
        ]);
    }
}
