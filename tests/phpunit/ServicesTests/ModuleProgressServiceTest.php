<?php

declare(strict_types=1);

namespace Tests\ServicesTests;

use App\Models\ModuleProgress;
use App\Services\ModuleProgressService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;


class ModuleProgressSerivceTest extends TestCase
{
    use DatabaseMigrations;

    protected $service = null;
    public function setUp()
    {
        parent::setUp();
        $this->service = new ModuleProgressService();

    }

    /**
     * @test
     */
    public function getModuleProgress_returns_array_with_selected_modules_progress()
    {
        $moduleProgressFactory = factory(ModuleProgress::class)->make([
            'user_id' => '1',
            'current_module' => 'drugs',
            'current_page' => 7,
            'max_page' => 17,
        ])->save();

        $return_data = [
            'user_id' => '1',
            'current_module' => 'drugs',
            'current_page' => '7',
            'max_page' => '17',
        ];

        $input_data = [
            'user_id' => '1',
        ];
        $this->assertEquals($this->service->getModuleProgress($input_data), $return_data);
    }

    /**
     * @test
     */
    public function setModuleProgress_works_when_there_is_nothing_in_the_table()
    {
        $data = [
            'user_id' => '1',
            'current_module' => 'drugs',
            'current_page' => '10',
            'max_page' => '17',
        ];

        $this->service->setModuleProgress($data);

        $this->assertDatabaseHas('module_progresses', $data);
    }

    /**
     * @test
     */
    public function setModuleProgress_works_when_there_previous_data_in_the_table()
    {
        $pre_data = [
            'user_id' => '1',
            'current_module' => 'drugs',
            'current_page' => '7',
            'max_page' => '17',
        ];
        $moduleProgressFactory = factory(ModuleProgress::class)->make($pre_data)->save();

        $this->assertDatabaseHas('module_progresses', $pre_data);

        $post_data = [
            'user_id' => '1',
            'current_module' => 'drugs',
            'current_page' => '10',
            'max_page' => '17',
        ];


        $this->service->setModuleProgress($post_data);

        $this->assertDatabaseHas('module_progresses', $post_data);
    }
    /**
     * @test
     */
    public function check_if_user_has_a_module_that_exists(){

        $data = ['user_id' => 'members:000022575'];
        $moduleComplete = ModuleProgress::find($data['user_id']);

        $this->assertNull($moduleComplete);

    }
}
