<?php

declare(strict_types=1);

namespace Tests\ServicesTests;

use App\Models\UserRoles;
use App\Services\UserRoleService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Tests\TestCase;

class UserRoleServiceTest extends TestCase
{
    use DatabaseMigrations;

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
}
