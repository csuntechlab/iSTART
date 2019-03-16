<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface UserGroupContract
{
    public function getGroup(array $data): array;
    public function sortAuthenticatedUsers($user);

}
