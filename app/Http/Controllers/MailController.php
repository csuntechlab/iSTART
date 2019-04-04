<?php

namespace App\Http\Controllers;

use App\Contracts\UserAssignedGroupEmailContract;
use App\Services\UserGroupService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\GenericEmail;
use App\Http\Controllers\UserGroupController;
use App\Models\UserGroup;
use App\Models\Research;

class MailController extends Controller
{
    protected $emailUtility;

    public function __construct(UserAssignedGroupEmailContract $emailUtility)
    {
        $this->emailUtility = $emailUtility;
    }

    public function sendMail()
    {
        return $this->emailUtility->sendMail();
    }
}
