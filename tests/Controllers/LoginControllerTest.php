<?php

namespace Tests\Controllers;

use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;
use App\Http\Controllers\LoginController;
use App\Contracts\AuthenticationContract;


class LoginControllerTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function setUp()
    {
        parent::setUp();
        $this->verifier = Mockery::spy(AuthenticationContract::class);
    }

    public function eligible_user_can_log_in()
    {
        $data = ['username' => 'mn117580', 'password' => 'lastsemester2019.'];
        $controller = new LoginController($this->verifier);
        $request = new Request($data);
        $this->verifier
            ->shouldReceive('authenticateUser')
            ->once()
            ->with($data)
            ->andReturn(true);
        $response = $controller->authenticateUser($request);
        $this->assertEquals('http://localhost/login', $response->getTargetUrl());
    }
}
