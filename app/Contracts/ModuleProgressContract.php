<?php

namespace App\Contracts;

interface ModuleProgressContract
{
    public function getModuleProgress($data): array;

    public function setModuleProgress($data);
    public function remindUserofModule($request);
}