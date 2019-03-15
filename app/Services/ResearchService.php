<?php

namespace App\Services;

use App\Contracts\ResearchContract;
use App\Models\Research;

class ResearchService implements ResearchContract
{
    public function userHasResearchId($user){
        $user_id = $user['user_id'];
        $userResearch = Research::where('user_id', $user_id)->first();

        if( $userResearch == null){
            return false;
        }else {
            return true;
        }
    }
}
