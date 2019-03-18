<?php

namespace App\Services;

use App\Contracts\ResearchContract;
use App\Models\Research;

class ResearchService implements ResearchContract
{
    public function userHasResearchId($user){
        $userResearch = Research::where('user_id', $user_id['user_id'])->first();
        dd($userResearch);
        if( $userResearch == null){
            return false;
        }else {
            return true;
        }
    }
}
