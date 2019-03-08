<?php

namespace App\Http\Controllers;

use App\Contracts\UserResearchContract;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    protected $userResearchUtility;

    public function __construct(UserRoleContract $userResearchUtility)
    {
        $this->userResearchUtility = $userResearchUtility;
    }

    public function matchID(Request $request)
    {
        $data = ['user_id' => $request->user_id];

        return $this->userResearchUtility->matchID($data);
    }
}
