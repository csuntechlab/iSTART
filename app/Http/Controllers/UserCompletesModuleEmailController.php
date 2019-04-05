<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\UserCompletesModuleEmail;
use Illuminate\Support\Facades\Mail;
use App\Contracts\UserCompletesModuleEmailContract;
use App\Services\UserCompletesModuleEmailService;

class UserCompletesModuleEmailController extends Controller
{
    protected $userCompletesModuleEmailUtility;

    public function __construct(UserCompletesModuleEmailContract $userCompletesModuleEmailUtility)
    {
        $this->userCompletesModuleEmailUtility = $userCompletesModuleEmailUtility;
    }
    public function sendMail()
    {
        return $this->userCompletesModuleEmailUtility->sendMail();
    }
}
