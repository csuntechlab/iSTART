<?php

namespace App\Services;

use App\Contracts\ParticipantContract;
use App\Models\Participant;
use App\Mail\WelcomeEmail;
use GuzzleHttp\Client;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
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
        $participants = Participant::all();

        foreach ($goodParticipantsMembers as $key => $goodParticipantsMember) {
            if ($participants->where('user_id', $goodParticipantsMember['user_id'])->first()) {
                unset($goodParticipantsMembers[$key]);
            } else {
                Mail::to($goodParticipantsMember['email'])->send(new WelcomeEmail());
                Arr::forget($goodParticipantsMember,'email');
                $ParticipantsEmailRemoved[] = $goodParticipantsMember;
            }
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
