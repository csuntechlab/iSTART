<?php

declare(strict_types=1);

namespace App\Services;

use App\Contracts\UserResearchContract;
use App\Models\UserResearch;

class UserResearchService implements UserResearchContract
{
    public function matchIDs(array $data)
    {
        $userResearch = UserResearch::where('user_id', $data['user_id'])->first();
        return [
            'user_id' => $userResearch['user_id'],
            'research_id' => $userResearch['research_id']
        ];
    }
}
