<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface UserRoleContract
{
    public function matchIDs(array $data);
}
