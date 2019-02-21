<?php

namespace Tests\ControllerTests;

use App\Contracts\UserRoleContract;
use App\Http\Controllers\UserRoleController;
use Illuminate\Http\Request;
use Mockery;
use Tests\TestCase;

class UserRoleControllerTest extends TestCase
{
    public $utility;

    public function setUp(){
        parent::setUp();
        $this->utility = Mockery::spy(UserRoleContract::class);
    }

    /**
     * @test
     */
    public function getRole_returns_role_and_email_from_utility_as_array()
    {
        $UserRoleController = new UserRoleController($this->utility);

        $data = [
            'user_role' => 'some role',
            'user_email' => '@face.come'
        ];

        $request = new Request();
        $request->replace([
            'email'=>'@face.come'
        ]);

        $this->utility
            ->shouldReceive('getRole')
            ->andReturn($data);


        $this->assertEquals($data, $UserRoleController->getRole($request));
    }
}
