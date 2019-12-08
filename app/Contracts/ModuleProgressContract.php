<?php

namespace App\Contracts;

interface ModuleProgressContract
{
    public function getModuleProgress($data): array;

    public function setModuleProgress($data);

    public function moduleComplete($data);

    public function createNewModule($data): object;

    public function moduleExists($data): boolean;


}
