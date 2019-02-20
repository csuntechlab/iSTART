<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface UserRoleContracts
{
    public function getRole(array $data): array;


}
