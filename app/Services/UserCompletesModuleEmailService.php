<?php
/**
 * Created by PhpStorm.
 * User: mbendandour
 * Date: 3/29/19
 * Time: 9:41 AM
 */

namespace App\Services;

use Illuminate\Support\Facades\Mail;
use App\Contracts\UserCompletesModuleEmailContract;
use App\Models\ModuleProgress;
use App\Models\Research;
use App\Mail\UserCompletesModuleEmail;
use App\Http\Controllers\UserCompletesModuleEmailController;

class UserCompletesModuleEmailService implements UserCompletesModuleEmailContract
{
    public function sendMail()
    {
        $user = auth()->user();
        $currentModule = ModuleProgress::find($user['user_id']);
        $researchID = Research::find($user['user_id']);
        $userCompletesModuleEmail = new \stdClass();
        $userCompletesModuleEmail->current_module = $currentModule['current_module'];
        $userCompletesModuleEmail->research_id = $researchID['research_id'];
        Mail::to((env('RECIEVE_EMAIL')))->send(new UserCompletesModuleEmail($userCompletesModuleEmail));

        return true;
    }
}