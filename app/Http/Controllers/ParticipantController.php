<?php

namespace App\Http\Controllers;

use App\Jobs\RemoveParticipantFromStudy;
use App\Models\Participant;
use App\Models\User;
use Illuminate\Http\Request;
use App\Contracts\ParticipantContract;
use Illuminate\Support\Facades\DB;
class ParticipantController extends Controller
{
    protected $participantUtility;

    public function __construct(ParticipantContract $participantUtility)
    {
        $this->participantUtility = $participantUtility;
    }

    public function addGoodParticipantsToParticipantsTable(Request $request){

        $goodParticipants = [

            'goodParticipants'=> $request->all()
        ];

        return $this->participantUtility->addGoodParticipantsToParticipantsTable($goodParticipants);
    }

    public function removeParticipantFromStudy(Request $request){

        $user = $request->all();
        Participant::find($user['user_id'])->delete();

        $this->dispatch(new RemoveParticipantFromStudy($user));

        return 'True';


    }
}
