<?php

namespace Tests\ServicesTests;

use App\Services\UserCompletesModuleEmailService;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;
use App\Contracts\UserCompletesModuleEmailContract;
use Mockery;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use App\Services\AuthenticationService;


class UserCompletesModuleEmailServiceTest extends TestCase
{
    protected $userCompletesModuleEmailUtility;
    protected $service;

    public function setUp()
    {
        parent::setUp();
        $this->userCompletesModuleEmailUtility = Mockery::spy(UserCompletesModuleEmailContract::class);
        $this->service = new UserCompletesModuleEmailService();

    }
    /**
     * @test
     */
    public function email_function_is_called_and_email_is_sent()
    {

        $email = $this->service;
        $this->assertTrue($email->sendMail());
    }
}
