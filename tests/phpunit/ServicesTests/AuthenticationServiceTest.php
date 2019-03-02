<?php

namespace Test\ServicesTests;

use App\Services\AuthenticationService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;
use App\Contracts\AuthenticationContract;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class AuthenticationServiceTest extends TestCase
{
    /**
     *@uses AuthenticationService
     * @return void
     */
    protected $AuthenticationService;
    protected $utility;

    public function setUp()
    {
        parent::setUp();
        $this->utility = Mockery::spy(AuthenticationContract::class);

    }

    /**
     * @test
     */
    public function authenticateUser_returns_authenticated_user(){
//        $data = ['username' => 'steve@csun.edu', 'password' => ''];
        $returnData = ['user_id'=>'members:100010526',
                        'valid'=>'1',
                        ];
        $user = new User([
            'user_id' => 'members:100010526',
            'rank' => 'beast',
        ]);
        $this->be($user);
        Auth::shouldReceive('attempt')
            ->once()
            ->andReturn(true);
        Auth::shouldReceive('user')
            ->andReturn($returnData);

        $service = new AuthenticationService($this->utility);

        $this->utility
            ->shouldReceive('authenticateUser')
            ->andReturn($returnData);

        $this->assertEquals($returnData, $service->authenticateUser($user));
    }
}
