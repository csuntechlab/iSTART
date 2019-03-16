<?php

namespace Test\ServicesTests;

use App\Services\AuthenticationService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;
use App\Contracts\AuthenticationContract;
use App\Contracts\ResearchContract;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserGroup;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\DatabaseMigrations;

class AuthenticationServiceTest extends TestCase
{
    /**
     *@uses AuthenticationService
     * @return void
     */

    use DatabaseMigrations;
    protected $AuthenticationService;
    protected $utility;
    protected $researchContract;

    public function setUp()
    {
        parent::setUp();
        $this->seed('UserGroupSeeder');
        $this->utility = Mockery::spy(AuthenticationContract::class);
        $this->researchUtility = Mockery::spy(ResearchContract::class);
    }

    /**
     * @test
     */
    public function authenticateUser_returns_authenticated_user(){
        $returnData = [
            'user_id'=>'members:000022575',
            'valid'=>'1',
            'user_group'=> 'comparison'
        ];
        $user = new User([
            'user_id' => 'members:000022575',
            'rank' => 'beast',
        ]);

        $this->be($user);
        Auth::shouldReceive('attempt')
            ->once()
            ->andReturn(true);
        Auth::shouldReceive('user')
            ->andReturn($returnData);

        $service = new AuthenticationService($this->researchUtility);

        $this->utility
            ->shouldReceive('authenticateUser')
            ->andReturn($returnData);
        // dd($service->authenticateUser($user));
        $this->assertEquals($returnData, $service->authenticateUser($user));
    }
}
