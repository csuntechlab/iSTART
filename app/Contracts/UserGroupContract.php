<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface UserGroupContract
{
    public function getGroup($data);
    public function sortAuthenticatedUsers($user);

}
