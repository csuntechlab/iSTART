<?php

declare(strict_types=1);

namespace Tests\ServicesTests;

use App\Contracts\UserRoleContract;
use App\Models\UserRoles;
use App\Services\UserRoleService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Mockery;
use Tests\TestCase;

class UserRoleServiceTest extends TestCase
{
    use DatabaseMigrations;

    public $utility;

    public function setUp()
    {
        parent::setUp();
        $this->utility = Mockery::spy(UserRoleContract::class);
    }

    /**
     * @test
     */
    public function getRole_returns_role_password_remember_token_display_name_and_email_from_utility_as_array()
    {
        $userRoleService = new UserRoleService($this->utility);

        $userRoleFactory = factory(UserRoles::class)->make([
            'user_email' => 'nr_cyndee.bellamy@csun.edu',
            'user_role' => 'some role',
            'display_name' => 'Someone Name',
            'password' => 'sldkfjafajsd',
            'remember_token' => 'asdlfkasjfklasd;fjsad',
        ])->save();

        $data = [
            'user_email' => 'someone@face.com',
            'user_role' => 'some role',
            'display_name' => 'Someone Name',
            'password' => 'sldkfjafajsd',
            'remember_token' => 'aflsjdkfjdsalew',
        ];

        $testUserRoleService = ([
            'user_email' => $data['user_email'],
            'user_role' => $data['user_role'],
            'display_name' => $data['display_name'],
            'password' => $data['password'],
            'remember_token' => $data['remember_token'],
        ]);

        $email = ['user_email' => 'yungemail@face.com'];
        $outputFromUserRoleService = $userRoleService->getRole($email);

        $this->assertEquals(\json_encode($outputFromUserRoleService), $testUserRoleService);
    }
}
