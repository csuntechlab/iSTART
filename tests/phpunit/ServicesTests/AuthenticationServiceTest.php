<?php

namespace Test\ServicesTests;

use App\Services\AuthenticationService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;
use App\Contracts\AuthenticationContract;
use App\Contracts\ResearchContract;
use App\Contracts\UserGroupContract;
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
    protected $userGroupUtility;

    public function setUp()
    {
        parent::setUp();
        $this->seed(\UserGroupSeeder::class);
        $this->utility = Mockery::spy(AuthenticationContract::class);
        $this->researchUtility = Mockery::spy(ResearchContract::class);
        $this->userGroupUtility = Mockery::spy(UserGroupContract::class);
    }

    /**
     * @test
     */

    public function authenticateUser_without_reasearch_id_returns_authenticated_user(){
        $data = [
            'user_id'=>'members:000022575',
            'valid'=>'1',
            'user_group'=> 'comparison',
            'research_id' => false
        ];

        $user = new User([
            'user_id' => 'members:000022575',
            'rank' => 'beast',
        ]);

        $credentials = [
            'username' => 'cyndee.bellamy@csun.edu',
            'password' => ''
        ];

        $this->be($user);
        Auth::shouldReceive('attempt')
            ->once()
            ->andReturn(true);
        Auth::shouldReceive('user')
            ->andReturn($data);

        $this->utility
        ->shouldReceive(['authenticateUser' => $credentials])
        ->andReturn($data['user_id'], $data['valid'], $data['user_group'], $data['research_id']);

        $this->userGroupUtility
            ->shouldReceive(['sortAuthenticatedUsers' => $user],
                            ['getGroup' => $user])
            ->andReturn($data['user_group'], $data['user_id']);

        $this->researchUtility
            ->shouldReceive(['userHasResearchId' => $user])
            ->andReturn(false);

        $service = new AuthenticationService($this->researchUtility, $this->userGroupUtility);



        $this->assertEquals($data, $service->authenticateUser($credentials));
    }

    public function authenticateUser_with_reasearch_id_returns_authenticated_user(){
        $data = [
            'user_id'=>'members:000021315',
            'valid'=>'1',
            'user_group'=> 'intervention',
            'research_id' => true
        ];

        $userWithResearchId = new User([
            'user_id' => 'members:000021315',
            'rank' => 'alt supreme leader',
        ]);

        $credentials = [
            'username' => 'april.feldman@csun.edu',
            'password' => ''
        ];

        $this->be($user);
        Auth::shouldReceive('attempt')
            ->once()
            ->andReturn(true);
        Auth::shouldReceive('userWithResearchId')
            ->andReturn($data);

        $this->userGroupUtility
            ->shouldReceive('sortAuthenticatedUsers')
            ->andReturn($data['user_group'], $data['user_id']);

        $this->researchUtility
            ->shouldReceive('userHasResearchId')
            ->andReturn($data['research_id']);

        $service = new AuthenticationService($this->researchUtility, $this->userGroupUtility);

        $this->utility
            ->shouldReceive('authenticateUser')
            ->andReturn($data);

        $this->assertEquals($data, $service->authenticateUser($credentials));
    }
}
