<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contracts\AdminContract;
 
class AdminController extends Controller
{
    protected $adminUtility = null;

    public function __construct(AdminContract $adminUtility)
    {
        $this->adminUtility = $adminUtility;
    }

    public function checkEmailsInJson(Request $request)
    {
        $emailResearchIdPairs = json_decode($request->getContent(), true);

        return json_encode($this->adminUtility->validateEmails($emailResearchIdPairs));

    }
}
