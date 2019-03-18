<?php

declare(strict_types=1);

namespace Tests\ControllersTests;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;
use App\Http\Controllers\LoginController;
use App\Contracts\AuthenticationContract;
use Illuminate\Http\Request;



class LoginControllerTest extends TestCase
{
    /**
     * A basic test example.
     * @uses LoginController
     *
     * @return void
     * @covers \App\Http\Controllers\LoginController::__construct
     *
     */

    protected $LoginController;
    protected $utility;

    public function setUp()
    {
        parent::setUp();
        $this->utility = Mockery::mock(AuthenticationContract::class);
        $this->LoginController = new LoginController($this->utility);

    }
    /** @test */

    public function eligible_user_can_log_in()
    {
        $data = ['username' => 'steve@csun.edu', 'password' => ''];
        $returnData = ['user_id'=> 'members:100010526','valid'=>'1',
                        'token'=>'$2y$10$Nu3XOwBaMHnpH4D.QeVW9.SwpGd0m0Nc1pEL8iGFNDsZ1Qeqg9sJu.COvtdidfDF71HMnwi1i0LS'];
        $request = new Request($data);
        $this->utility
            ->shouldReceive('authenticateUser')
            ->andReturn($returnData);

        $this->assertArrayHasKey('user_id',$this->LoginController->authenticateUser($request));
        $this->assertArrayHasKey('valid',$this->LoginController->authenticateUser($request));
        $this->assertArrayHasKey('token',$this->LoginController->authenticateUser($request));
        $this->assertNotNull($this->LoginController->authenticateUser($request)['token']);
    }

    /** @test */

    public function ineligible_user_cannot_log_in()
    {
        $data = ['username' => 'tim@csun.edu', 'password' => '00'];
        $returnData = ['valid' => '0'];
        $request = new Request($data);
        $this->utility
            ->shouldReceive('authenticateUser')
            ->andReturn($returnData);
        $this->assertEquals($returnData, $this->LoginController->authenticateUser($request));
    }


}
