<?php

declare(strict_types=1);

namespace Tests\ServicesTests;

use App\Models\UserRoles;
use App\Models\User;
use App\Services\UserRoleService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;


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
            'user_id' => 'members:12345',
            'user_role' => 'some role',
            'display_name' => 'Someone Name',
            'remember_token' => 'toke',
        ])->save();

        $data = [
            'user_id' => 'members:12345',
            'user_role' => 'some role',
            'display_name' => 'Someone Name',
            'remember_token' => 'toke',
        ];

        $user_id = ['user_id' => 'members:12345'];
        $outputFromUserRoleService = $userRoleService->getRole($user_id);

        $this->assertEquals($data, $outputFromUserRoleService);
    }

    /**
     * @test
     */
    public function user_is_evenly_distributed_into_the_groups_and_assigned_a_role()
    {
        $service = new UserRoleService();
        $userRolesDB = [];
        $this->assertDatabaseMissing('user_roles', $userRolesDB);

        for($i = 1; $i <= 120; $i++) {

            $user = new User(['user_id'=>$i]
                            );
            $this->be($user);
            $dataFromService = $service->sortAuthenticatedUsers($user);

            $userRolesDB = [

                'user_id'=>$i,
                'user_role'=>$dataFromService
            ];

            $this->assertDatabaseHas('user_roles', $userRolesDB);
            $this->assertNotNull($dataFromService);

        }

        $groups = DB::table('user_roles')
            ->selectRaw('user_role, COUNT(*) as count')
            ->groupBy('user_role')
            ->get();

        $comparisonCountFromData = $groups->where('user_role', 'comparison')->first();
        $controlCountFromData = $groups->where('user_role', 'control')->first();
        $interventionCountFromData = $groups->where('user_role', 'intervention')->first();

        $this->assertEquals($comparisonCountFromData->count,40);
        $this->assertEquals($controlCountFromData->count,40);
        $this->assertEquals($interventionCountFromData->count,40);

    }
}
