<?php

namespace App\Services;
use App\Contracts\InfoFromModuleEmailContract;
use App\Mail\InfoFromModuleEmail;
use Illuminate\Support\Facades\Mail;

class InfoFromModuleEmailService implements InfoFromModuleEmailContract
{
    public function sendEmailWithInfoFromModule($data)
    {
        $user = auth()->user();
        $infoFromModuleEmail = new \stdClass();
        $infoFromModuleEmail->info = $data['module_data'];
        Mail::to($user['email'])->send(new InfoFromModuleEmail($infoFromModuleEmail));
    }
}
