<?php

namespace Tests\Feature;

use App\Services\AuthenticationService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthenticationServiceTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    /**
     * @test
     */
    public function authenticateUser_returns_authenticated_user(){
        $authenticationService = new AuthenticationService();
        $data = ['username' => 'steve@csun.edu', 'password' => ''];
        $returnData = ['user_id'=>'members:100010526',
                        'valid'=>'1',
                        ];
        $this->assertEquals($returnData, $authenticationService->authenticateUser($data));
    }
}
