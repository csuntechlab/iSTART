<?php

namespace Tests\ControllerTests;

use App\Contracts\UserRoleContracts;
use App\Http\Controllers\UserRoleController;
use Illuminate\Http\Request;
use Mockery;
use Tests\TestCase;

class UserRoleControllerTest extends TestCase
{
    public $utility;
    public $UserRoleController;

    public function setUp(){
        parent::setUp();
        $this->utility = Mockery::mock(UserRoleContracts::class);
        $this->UserRoleController = new UserRoleController($this->utility);
    }

    /**
     * @test
     */
    public function getRole_returns_role_and_email_from_utility_as_array()
    {
        // $this->UserRoleController = new UserRoleController($this->utility);
        
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


        $this->assertEquals($data, $this->UserRoleController->getRole($request));
    } 
}
