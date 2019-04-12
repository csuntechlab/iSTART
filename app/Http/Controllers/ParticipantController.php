<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contracts\ParticipantContract;
class ParticipantController extends Controller
{
    protected $participantUtility;

    public function __construct(ParticipantContract $participantUtility)
    {
        $this->participantUtility = $participantUtility;
    }

    public function addGoodParticipantsToParticipantsTable(Request $request){

        $goodParticipants = [

            'goodParticipants'=> $request->good
        ];

        return $this->participantUtility->addGoodParticipantsToParticipantsTable($goodParticipants);
    }
}
