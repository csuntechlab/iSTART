<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface ResearchContract
{
    public function userHasResearchId(array $data);
}
