<?php

namespace App\Contracts;


interface AdminContract
{
    public function validateEmails($emailParticipantIdPairing);
}