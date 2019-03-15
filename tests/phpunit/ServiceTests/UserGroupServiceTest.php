<?php

declare(strict_types=1);

namespace Tests\ServiceTests;

use App\Models\UserGroup;
use App\Services\UserGroupService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class UserGroupServiceTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * @test
     */
    public function getGroup_returns_group_remember_token_display_name_and_id_from_utility_as_array()
    {
        $userGroupService = new UserGroupService();

        $userGroupFactory = factory(UserGroup::class)->make([
            'user_id' => 'someone@face.com',
            'user_group' => 'some group',
            'display_name' => 'Someone Name',
            'remember_token' => 'toke',
        ])->save();

        $data = [
            'user_id' => 'someone@face.com',
            'user_group' => 'some group',
            'display_name' => 'Someone Name',
            'remember_token' => 'toke',
        ];

        $id = ['user_id' => 'someone@face.com'];
        $outputFromUserGroupService = $userGroupService->getGroup($id);

        $this->assertEquals($data, $outputFromUserGroupService);
    }
}
