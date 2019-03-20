<?php

declare(strict_types=1);

namespace App\ModelRepositoryInterfaces;

interface UserAdminModelRepositoryInterface
{
    public function find($userId);
}
