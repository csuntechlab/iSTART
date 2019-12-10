<?php

namespace App\Contracts;

interface ModuleProgressContract
{
    public function getModuleProgress($data): array;

    public function setModuleProgress($data);

    public function moduleComplete($data);

    public function createNewModule($data);

    public function moduleExists($data);


}
