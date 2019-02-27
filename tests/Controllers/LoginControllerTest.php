<?php

declare(strict_types=1);

namespace Tests\Controllers;

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

    protected $utility;
    /** @test */

    public function setUp()
    {
        parent::setUp();
        $this->utility = Mockery::mock(AuthenticationContract::class);
    }

    public function eligible_user_can_log_in()
    {
        $data = ['username' => 'steve', 'password' => ''];
        $controller = new LoginController($this->utility);
        $request = new Request($data);

        $this->utility
            ->shouldReceive('authenticateUser')
            ->andReturn($data);




        $response = $controller->authenticateUser($request);
        $this->assertEquals($data, $this->controller->authenticateUser($request));
    }
}//how to test if route was hit
