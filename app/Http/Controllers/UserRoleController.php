<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Contracts\UserRoleContract;
use Illuminate\Http\Request;

class UserRoleController extends Controller
{
    protected $userRoleUtility;

    public function __construct(UserRoleContract $userRoleUtility)
    {
        $this->userRoleUtility = $userRoleUtility;
    }

    public function getRole(Request $request)
    {
        $data = ['user_email' => $request->email];

        return $this->userRoleUtility->getRole($data);
    }
}
