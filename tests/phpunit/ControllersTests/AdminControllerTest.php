<?php

declare(strict_types=1);

namespace Tests\ControllersTests;

use Tests\TestCase;
use Mockery;
use App\Http\Controllers\AdminController;
use App\Contracts\AdminContract;
use Illuminate\Http\Request;

class AdminControllerTest extends TestCase
{

    protected $AdminController;
    protected $AdminUtility;

    public function setUp()
    {
        parent::setUp();
        $this->AdminUtility = Mockery::mock(AdminContract::class);
        $this->AdminController = new AdminController($this->AdminUtility);
    }

    /** @test */
    public function checkEmailsInJson_take_in_json_and_returns_proper_json()
    {
        $request = new Request();

        $data = [
            'bad' => ['no'],
            'good' => ['yes']
        ];
        
        $this->AdminUtility
            ->shouldReceive('validateEmails')
            ->andReturn($data);
        
        $this->assertJsonStringEqualsJsonString(json_encode($data),$this->AdminController->checkEmailsInJson($request));
    }
}