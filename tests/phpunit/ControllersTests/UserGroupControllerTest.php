<?php

declare(strict_types=1);

namespace Tests\ControllersTests;

use App\Contracts\UserGroupContract;
use App\Http\Controllers\UserGroupController;
use Illuminate\Http\Request;
use Mockery;
use Tests\TestCase;

class UserGroupControllerTest extends TestCase
{
    public $utility;
    public $UserGroupController;

    public function setUp()
    {
        parent::setUp();
        $this->utility = Mockery::mock(UserGroupContract::class);
        $this->UserGroupController = new UserGroupController($this->utility);
    }

    /**
     * @test
     */
    public function getGroup_returns_group_and_email_from_utility_as_array()
    {
        $data = [
            'user_group' => 'some group',
            'user_id' => 'member:1123334',
        ];

        $request = new Request();
        $request->replace([
            'user_id' => 'member:1123334',
        ]);

        $this->utility
            ->shouldReceive('getGroup')
            ->andReturn($data);

        $this->assertEquals($data, $this->UserGroupController->getGroup($request));
    }
    
}
