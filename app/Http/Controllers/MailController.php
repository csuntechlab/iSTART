<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\GenericEmail;

class MailController extends Controller
{
    public function sendMail()
    {
        Mail::to((env('RECIEVE_EMAIL')))->send(new GenericEmail);

        return "good";
    }
}
