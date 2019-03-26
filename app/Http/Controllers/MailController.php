<?php

namespace App\Http\Controllers;

use App\Services\UserGroupService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\GenericEmail;
use App\Http\Controllers\UserGroupController;
use App\Models\UserGroup;
use App\Models\Research;

class MailController extends Controller
{
    public function sendMail()
    {
        $user = auth()->user();
        $userGroup = UserGroup::find($user['user_id']);
        $researchID = Research::find($user['user_id']);
        $genericEmail = new \stdClass();
        $genericEmail->user_group = $userGroup['user_group'];
        $genericEmail->research_id = $researchID['research_id'];
        Mail::to((env('RECIEVE_EMAIL')))->send(new GenericEmail($genericEmail));

        return "good";
    }
}
