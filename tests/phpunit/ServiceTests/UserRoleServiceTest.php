<?php

declare(strict_types=1);

namespace Tests\ServiceTests;

use App\Models\UserRoles;
use App\Services\UserRoleService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class UserRoleServiceTest extends TestCase
{
    use DatabaseMigrations;

    protected $utility;

    public function setUp()
    {
        parent::setUp();
        $this->utility = new UserRoleService();

    }
    /**
     * @test
     */
    public function getRole_returns_role_remember_token_display_name_and_email_from_utility_as_array()
    {
        $userRoleService = new UserRoleService();

        $userRoleFactory = factory(UserRoles::class)->make([
            'user_email' => 'someone@face.com',
            'user_role' => 'some role',
            'display_name' => 'Someone Name',
            'remember_token' => 'toke',
        ])->save();

        $data = [
            'user_email' => 'someone@face.com',
            'user_role' => 'some role',
            'display_name' => 'Someone Name',
            'remember_token' => 'toke',
        ];

        $email = ['user_email' => 'someone@face.com'];
        $outputFromUserRoleService = $userRoleService->getRole($email);

        $this->assertEquals($data, $outputFromUserRoleService);
    }

    /**
     * @test
     */
    public function user_is_evenly_distributed_into_the_groups_and_assigned_a_role()
    {
        $userRolesDB = ['user_role'];
        $this->assertDatabaseMissing('user_roles', $userRolesDB);

        for($i = 1; $i <= 120; $i++) {
            $data = [//user data
                'user_id' => 'member',
                'email' => 'nr_steven.fitzgerald@csun.edu',
                ''
            ];
            $this->utility->sortAuthenticatedUsers($data);
            $userRolesDB = [
                'id' => $i,
                'user_role' => 'comparison',//since each user will have different group, how will
                //make it so each user_role is not just testing comparison

            ];

            $this->assertDatabaseHas('user_roles', $userRolesDB);
        }
    }
}
