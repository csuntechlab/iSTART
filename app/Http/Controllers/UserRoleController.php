<?php

namespace App\Http\Controllers;

use App\Contracts\UserRoleContracts;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{

    protected $userRoleUtility;

    public function __construct(UserRoleContracts $userRoleUtility)
    {
        $this->userRoleUtility = $userRoleUtility;
    }

    public function getRole(Request $request)
    {
        $data = ['user_email' => $request->email];
        return $this->userRoleUtility->getRole($data);
    }
}
