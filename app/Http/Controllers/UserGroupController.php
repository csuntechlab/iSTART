<?php

declare(strict_types=1);

namespace App\Http\Controllers;

use App\Contracts\UserAssignedGroupEmailContract;
use App\Contracts\UserGroupContract;
use Illuminate\Http\Request;

class UserGroupController extends Controller
{
    protected $userGroupUtility = null;

    public function __construct(UserGroupContract $userGroupUtility)
    {
        $this->userGroupUtility = $userGroupUtility;
    }

    public function getGroup(Request $request)
    {
        $data = ['user_id' => $request->user_id];

        return $this->userGroupUtility->getGroup($data);
    }

    public function sortAuthenticatedUsers()
    {
        $user = auth()->user();
        $userInformation = $this->userGroupUtility->sortAuthenticatedUsers($user);
        return ($userInformation);

    }
}

