<?php

namespace Test\ServicesTests;

use App\Services\AuthenticationService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;
use App\Contracts\AuthenticationContract;
use App\Contracts\ParticipantContract;
use App\Contracts\UserGroupContract;
use App\ModelRepositoryInterfaces\UserAdminModelRepositoryInterface;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\UserGroup;
use Illuminate\Support\Facades\Auth;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Carbon\Carbon;

class AuthenticationServiceTest extends TestCase
{
    /**
     *@uses AuthenticationService
     * @return void
     */

    use DatabaseMigrations;
    protected $AuthenticationService;
    protected $service;
    protected $participantContract;
    protected $userGroupUtility;
    protected $userAdminModelUtility;

    public function setUp()
    {
        parent::setUp();
        $this->participantUtility = Mockery::spy(ParticipantContract::class);
        $this->userGroupUtility = Mockery::spy(UserGroupContract::class);
        $this->userAdminModelUtility = Mockery::spy(UserAdminModelRepositoryInterface::class);
        $this->service = new AuthenticationService(
            $this->participantUtility,
            $this->userGroupUtility,
            $this->userAdminModelUtility
        );
    }

    /**
     * @test
     */
    public function authenticateUser_on_uncredited_user_returns_unauthenticated_user(){
        $data = [
            'valid'=>'0',
        ];

        $user = new User([
            'user_id' => '251'
        ]);

        $credentials = [
            'username' => 'yvonne.monreal@csun.edu',
            'password' => ''
        ];

        $this->be($user);

        Auth::shouldReceive('attempt')
            ->once()
            ->andReturn(false);

        $this->assertEquals($data, $this->service->authenticateUser($credentials));


    }

    /**
     * @test
     */
    public function authenticateUser_on_admin_user_returns_authenticated_admin_user(){
        $data = [
            'user_id' => '251',
            'valid' => '1',
            'isAdmin' => true,
            'user_group' => null
        ];

        $user = new User([
            'user_id' => '251'
        ]);

        $credentials = [
            'username' => 'sun.ra@csun.edu',
            'password' => ''
        ];

        $this->be($user);

        Auth::shouldReceive('attempt')
            ->once()
            ->andReturn(true);
        Auth::shouldReceive('user')
            ->andReturn($user);

        $this->userAdminModelUtility
            ->shouldReceive(['find' => $user['user_id']])
            ->andReturn(true);

        $this->assertEquals($data, $this->service->authenticateUser($credentials));


    }

    /**
     * @test
     */
    public function authenticateUser_without_reasearch_id_returns_unauthenticated_user(){
        $data = [
            'valid'=>'0',
        ];

        $user = new User([
            'user_id' => 'members:000022431',
            'rank' => 'beast',
        ]);

        $credentials = [
            'username' => 'yvonne.monreal@csun.edu',
            'password' => ''
        ];

        $this->be($user);

        Auth::shouldReceive('attempt')
            ->once()
            ->andReturn(true);
        Auth::shouldReceive('user')
            ->andReturn($user);


        $this->participantUtility
            ->shouldReceive(['userHasParticipantId' => $user])
            ->andReturn(false);

        $this->userAdminModelUtility
            ->shouldReceive(['find' => $user['user_id']])
            ->andReturn(false);

        $this->assertEquals($data, $this->service->authenticateUser($credentials));
    }

    /**
     * @test
     */
    public function authenticateUser_with_reasearch_id_returns_authenticated_user(){
        $data = [
            'user_id'=>'members:000021315',
            'valid'=>'1',
            'user_group'=> 'intervention',
            'isAdmin' => false,
            'expiration_date' => Carbon::now()->addDays(config('app.expiration_date'))->toDateTimeString(),
        ];

        $user = new User([
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
        Auth::shouldReceive('user')
            ->andReturn($user);

        $this->userGroupUtility
            ->shouldReceive('sortAuthenticatedUsers')
            ->andReturn($data['user_group'], $data['user_id']);

        $this->userAdminModelUtility
            ->shouldReceive(['find' => $user['user_id']])
            ->andReturn(false);

        $this->participantUtility
            ->shouldReceive('userHasParticipantId')
            ->andReturn(true);

        $this->assertEquals($data, $this->service->authenticateUser($credentials));
    }
}
