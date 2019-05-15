<?php

namespace App\Services;

use App\Contracts\ParticipantContract;
use App\Models\Participant;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Arr;
use Illuminate\Http\Request;
class ParticipantService implements ParticipantContract
{
    public function userHasParticipantId($user){
        $userParticipant = Participant::where('user_id', $user['user_id'])->first();

        if( $userParticipant == null){
            return false;
        }else {
            return true;
        }
    }

    public function addGoodParticipantsToParticipantsTable($goodParticipants){

        $goodParticipantsMembers = $goodParticipants['goodParticipants'];

        foreach ($goodParticipantsMembers as $goodParticipantsMember){

            Arr::forget($goodParticipantsMember,'email');
            $ParticipantsEmailRemoved[] = $goodParticipantsMember;
        }

        Participant::insert($ParticipantsEmailRemoved);


    }

    public function removeUserFromParticipantsTable($user) {
        $userParticipant = Participant::where('user_id', $user['user_id'])->first();

        if( $userParticipant != null){
            $userParticipant->delete();
        }

    }
}

