<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface UserRoleContract
{
    public function matchID(array $data);
}
    