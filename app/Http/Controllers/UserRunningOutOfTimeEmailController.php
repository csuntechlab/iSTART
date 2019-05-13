<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\UserRunningOutOfTimeEmail;
use Illuminate\Support\Facades\Mail;
use App\Contracts\UserRunningOutOfTimeEmailContract;
use App\Services\UserRunningOutOfTimeEmailService;

class UserRunningOutOfTimeEmailController extends Controller
{
    protected $userRunningOutOfTimeEmailUtility;

    public function __construct(UserRunningOutOfTimeEmailContract $userRunningOutOfTimeEmailUtility)
    {
        $this->userRunningOutOfTimeEmailUtility = $userRunningOutOfTimeEmailUtility;
    }
    public function sendMail()
    {
        $user = auth()->user();
        return $this->userRunningOutOfTimeEmailUtility->sendMail($user['user_id']);
    }
}
