<?php

declare(strict_types=1);

namespace Tests\ControllersTests;

use App\Contracts\ModuleProgressContract;
use App\Http\Controllers\ModuleProgressController;
use Illuminate\Http\Request;
use Mockery;
use Tests\TestCase;

class ModuleProgressControllerTest extends TestCase
{
    public $utility;
    public $ModuleProgressController;

    public function setUp()
    {
        parent::setUp();
        $this->utility = Mockery::spy(ModuleProgressContract::class);
        $this->ModuleProgressController = new ModuleProgressController($this->utility);
    }

    /**
     * @test
     */
    public function getModuleProgress_returns_module_progess_for_user_from_utility_as_array()
    {
        $data = [
            'user_id' => 'member:1123334',
            'current_module' => 'alcohol',
            'current_page' => 7,
            'max_page' => 17
        ];

        $request = new Request();
        $request->replace([
            'user_id' => 'member:1123334',
            'current_module' => 'alcohol'
        ]);

        $this->utility
            ->shouldReceive('getModuleProgress')
            ->andReturn($data);

        $this->assertEquals($data, $this->ModuleProgressController->getModuleProgress($request));
    }

    /**
     * @test
     */
    public function setModuleProgress_calls_utility()
    {
        $data = [
            'user_id' => 'member:1123334',
            'current_module' => 'alcohol',
            'current_page' => 7,
            'max_page' => 17
        ];

        $request = new Request();
        $request->replace([
            'user_id' => 'member:1123334',
            'current_module' => 'alcohol',
            'current_page' => 7,
            'max_page' => 17
        ]);

        $this->utility
            ->shouldReceive('setModuleProgress');

        $this->ModuleProgressController->setModuleProgress($request);
    }
    
}