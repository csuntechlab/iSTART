<?php

namespace App\Contracts;

use Illuminate\Http\Request;

interface ParticipantContract
{
    public function userHasParticipantId($user);
    public function addGoodParticipantsToParticipantsTable($goodParticipants);
    public function removeUserFromParticipantsTable($user);
}
