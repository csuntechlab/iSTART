<?php

declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Contracts\AdminContract;
use App\Models\User;
use App\ModelRepositoryInterfaces\UserModelRepositoryInterface;

class AdminService implements AdminContract
{
    protected $userModelUtility = null;

    public function __construct(UserModelRepositoryInterface $userModelUtility)
    {
        $this->userModelUtility = $userModelUtility;
    }

    public function validateEmails($emailParticipantIdPairings)
    {
        $good = [];
        $bad = [];
        foreach ($emailParticipantIdPairings as $emailPair) {
            if (isset($emailPair['email'])) {
                $userId = $this->userModelUtility->find($emailPair['email']);
                if(null === $userId) {
                    array_push($bad, $emailPair);
                } else {
                    array_push($good, [
                        'email' => $emailPair['email'],
                        'participant_id' => $emailPair['participant_id'],
                        'user_id' => $userId]);
                    }
            }
        }

        return ['good' => $good, 'bad' => $bad];
    }

}
