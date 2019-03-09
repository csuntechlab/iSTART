<?php

namespace App\Services;

use App\Contracts\ResearchContract;
use App\Models\Research;

class ResearchService implements ResearchContract
{
    public function userHasResearchId(array $data){
        $userResearch = Research::where('user_email', $data['user_email'])->first();

        if( $userResearch === null){
            return false;
        }else {
            return true;
        }
    }
}
