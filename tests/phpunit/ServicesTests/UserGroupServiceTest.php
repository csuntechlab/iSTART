<?php

declare(strict_types=1);

namespace Tests\ServicesTests;

use App\Contracts\UserAssignedGroupEmailContract;
use App\Models\UserGroup;
use App\Models\User;
use App\Services\UserGroupService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use PHPUnit\Framework\Constraint\IsTrue;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;
use App\Contracts\UserGroupContract;
Use Mockery;
class UserGroupServiceTest extends TestCase
{
    use DatabaseMigrations;

    protected $utility;
    protected $userGroupUtility;
    protected $userAssignedGroupEmailUtility;

    public function setUp()
    {
        parent::setUp();

        $this->userAssignedGroupEmailUtility = Mockery::spy(UserAssignedGroupEmailContract::class);
        $this->utility = new UserGroupService($this->userAssignedGroupEmailUtility);
        $this->userGroupUtility = Mockery::spy(UserGroupContract::class);
    }
    /**
     * @test
     */
    public function getGroup_returns_group_remember_token_display_name_and_email_from_utility_as_array()
    {
        $userGroupService = new UserGroupService($this->userAssignedGroupEmailUtility);

        $userGroupFactory = factory(UserGroup::class)->make([
            'user_id' => 'members:12345',
            'user_group' => 'some role',
            'display_name' => 'Someone Name',
            'remember_token' => 'toke',
        ])->save();

        $data = [
            'user_id' => 'members:12345',
            'user_group' => 'some role',
            'display_name' => 'Someone Name',
            'remember_token' => 'toke',
        ];

        $user_id = ['user_id' => 'members:12345'];
        $outputFromUserGroupService = $userGroupService->getGroup($user_id);

        $this->assertEquals($data, $outputFromUserGroupService);
    }

    /**
     * @test
     */
    public function user_is_evenly_distributed_into_the_groups_and_assigned_a_group()
    {
        $userGroupDB = [];
        $this->assertDatabaseMissing('user_groups', $userGroupDB);

        for($i = 1; $i <= 120; $i++) {

            $user = new User(['user_id'=>$i]
                            );
            $this->be($user);
            $dataFromService = $this->utility->sortAuthenticatedUsers($user);

            $userGroupDB = [

                'user_id'=>$i,
                'user_group'=>$dataFromService
            ];

            $this->assertDatabaseHas('user_groups', $userGroupDB);
            $this->assertNotNull($dataFromService);

        }

        $groups = DB::table('user_groups')
            ->selectRaw('user_group, COUNT(*) as count')
            ->groupBy('user_group')
            ->get();

        $comparisonCountFromData = $groups->where('user_group', 'comparison')->first();
        $controlCountFromData = $groups->where('user_group', 'control')->first();
        $interventionCountFromData = $groups->where('user_group', 'intervention')->first();

        $this->userAssignedGroupEmailUtility
            ->shouldReceive('sendEmail')
            ->andReturn(true);


        $this->assertEquals($comparisonCountFromData->count,40);
        $this->assertEquals($controlCountFromData->count,40);
        $this->assertEquals($interventionCountFromData->count,40);

    }


}
