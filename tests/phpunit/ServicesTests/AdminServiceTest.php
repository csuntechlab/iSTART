<?php

declare(strict_types=1);

namespace Tests\ServicesTests;

use App\Services\AdminService;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use App\ModelRepositoryInterfaces\UserModelRepositoryInterface;
use Tests\TestCase;
use Illuminate\Support\Facades\DB;
use Mockery;


class AdminServiceTest extends TestCase
{
    use DatabaseMigrations;

    protected $utility;
    protected $userModelUtility;

    public function setUp()
    {
        parent::setUp();
        $this->userModelUtility = Mockery::spy(UserModelRepositoryInterface::class);
        $this->utility = new AdminService($this->userModelUtility);
    }

    /**
     * @test
     */
    public function passes_in_array_of_mixed_good_and_bad_users_and_returns_correct_values()
    {
        $input_data = [
            [
                'email' => 'sun.ra@space.net',
                'research_id' => 'pew'
            ],
            [
                'email' => 'ornette.coleman@free.net',
                'research_id' => 'pow'
            ],
            [
                'email' => 'coleman.hawkings@sax.phone',
                'research_id' => 'neeto'
            ],
            [
                'email' => 'one.more@test.me',
                'research_id' => 'crayola'
            ],
        ];

        $this->userModelUtility
            ->shouldReceive('find')
            ->with('sun.ra@space.net')
            ->andReturn(123);
    
        $this->userModelUtility
            ->shouldReceive('find')
            ->with('ornette.coleman@free.net')
            ->andReturn(null);

        $this->userModelUtility
            ->shouldReceive('find')
            ->with('coleman.hawkings@sax.phone')
            ->andReturn(456);

        $this->userModelUtility
            ->shouldReceive('find')
            ->with('one.more@test.me')
            ->andReturn(null);

        $good = [
            [
                'email' => 'sun.ra@space.net',
                'research_id' => 'pew',
                'user_id' => 123
            ],
            [
                'email' => 'coleman.hawkings@sax.phone',
                'research_id' => 'neeto',
                'user_id' => 456
            ]
        ];

        $bad = [
            [
                'email' => 'ornette.coleman@free.net',
                'research_id' => 'pow'
            ],
            [
                'email' => 'one.more@test.me',
                'research_id' => 'crayola'
            ],
        ];

        $this->assertEquals($this->utility->validateEmails($input_data), ['good'=>$good,'bad'=>$bad]);

    }

}