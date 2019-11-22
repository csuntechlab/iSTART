<?php

declare(strict_types=1);

namespace Tests\ControllersTests;

use App\Contracts\ModuleProgressContract;
use App\Http\Controllers\ModuleProgressController;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Http\Request;
use Illuminate\Queue\Jobs\Job;
use Mockery;
use Tests\TestCase;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\Queue;
use App\Jobs\SendNewModuleEmail;
use Illuminate\Support\Carbon;
use App\Models\ModuleProgress;
use App\Jobs\SendReminderModuleEmail;
class ModuleProgressControllerTest extends TestCase
{
    public $utility;
    public $ModuleProgressController;
    use DatabaseMigrations;

    use DatabaseMigrations;

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
        ]);

        $this->utility
            ->shouldReceive('getModuleProgress')
            ->andReturn($data);

        $this->assertEquals($data, $this->ModuleProgressController->getModuleProgress($request));
    }

    /**
     * @test
     */
    public function getModuleProgress_throws_a_ValidationException_if_request_is_missing_user_id()
    {
        $this->expectException(ValidationException::class);
        $data = [
            'user_id' => 'member:1123334',
            'current_module' => 'alcohol',
            'current_page' => 7,
            'max_page' => 17
        ];

        $request = new Request();
        $request->replace([
            'replace_data' => 'replaced_data'
        ]);

        $this->utility
            ->shouldReceive('getModuleProgress')
            ->andReturn($data);

        $this->ModuleProgressController->getModuleProgress($request);
    }

    /**
     * @test
     */
    public function setModuleProgress_calls_utility()
    {
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

    /**
     * @test
     */
    public function setModuleProgress_throws_a_ValidationException_if_user_id_is_missing()
    {
        $this->expectException(ValidationException::class);

        $request = new Request();
        $request->replace([
            'current_module' => 'alcohol',
            'current_page' => 7,
            'max_page' => 17
        ]);

        $this->utility
            ->shouldReceive('setModuleProgress');

        $this->ModuleProgressController->setModuleProgress($request);
    }

    /**
     * @test
     */
    public function setModuleProgress_throws_a_ValidationException_if_current_module_is_missing()
    {
        $this->expectException(ValidationException::class);

        $request = new Request();
        $request->replace([
            'user_id' => 'member:1123334',
            'current_page' => 7,
            'max_page' => 17
        ]);

        $this->utility
            ->shouldReceive('setModuleProgress');

        $this->ModuleProgressController->setModuleProgress($request);
    }

    /**
     * @test
     */
    public function setModuleProgress_throws_a_ValidationException_if_current_page_is_missing()
    {
        $this->expectException(ValidationException::class);

        $request = new Request();
        $request->replace([
            'user_id' => 'member:1123334',
            'current_module' => 'alcohol',
            'max_page' => 17
        ]);

        $this->utility
            ->shouldReceive('setModuleProgress');

        $this->ModuleProgressController->setModuleProgress($request);
    }

    /**
     * @test
     */
    public function setModuleProgress_throws_a_ValidationException_if_max_page_is_missing()
    {
        $this->expectException(ValidationException::class);

        $request = new Request();
        $request->replace([
            'user_id' => 'member:1123334',
            'current_module' => 'alcohol',
            'current_page' => 7,
        ]);

        $this->utility
            ->shouldReceive('setModuleProgress');

        $this->ModuleProgressController->setModuleProgress($request);
    }
    /**
     * @test
     */
    public function moduleComplete_sends_email_to_user_5_days_after_module_complete()
    {
        $data = ['user_id' => 'members:000022575'];
        factory(ModuleProgress::class)->make(['user_id' => 'members:000022575'])
            ->save();
        $moduleComplete = ModuleProgress::find($data['user_id']);

        Queue::fake();



       SendNewModuleEmail::dispatch($moduleComplete);


        Queue::assertPushed(SendNewModuleEmail::class);
    }
    /**
     * @test
     */
    public function moduleComplete_sends_email_to_user_2_days_before_module_deadline()
    {
        $data = ['user_id' => 'members:000022575'];
        factory(ModuleProgress::class)->make(['user_id' => 'members:000022575'])
            ->save();

        $moduleComplete = ModuleProgress::find($data['user_id']);

        Queue::fake();
        SendReminderModuleEmail::dispatch($moduleComplete);
        Queue::assertPushed(SendReminderModuleEmail::class);
    }


}
