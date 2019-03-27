<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 3/27/19
 * Time: 2:34 PM
 */

namespace App\Services;

use Illuminate\Support\Facades\Mail;
use App\Mail\GenericEmail;
use App\Contracts\UserAssignedGroupEmailContract;
use App\Http\Controllers\UserGroupController;
use App\Models\UserGroup;
use App\Models\Research;

class UserAssignedGroupEmailService implements UserAssignedGroupEmailContract
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

        return true;
    }

}