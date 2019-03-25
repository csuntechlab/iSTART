<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use SimpleExcel\SimpleExcel;

class AdminController extends Controller
{
    public function checkEmailsInJson(Request $request)
    {
        $emailResearchIdPairs = json_decode($request->getContent());

    }
}
