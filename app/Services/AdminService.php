<?php

declare(strict_types=1);

namespace App\Services;

use Illuminate\Support\Facades\DB;
use App\Contracts\AdminContract;
use App\Model\User;
use App\ModelRepositoryInterfaces\UserModelRepositoryInterface;

class AdminService implements AdminContract
{
    protected $userModelUtility = null;

    public function __construct(UserModelRepositoryInterface $userModelUtility)
    {
        $this->userModelUtility = $userModelUtility;
    }

    public function validateEmails($emailResearchIdPairings)
    {
        $good = [];
        $bad = [];
        foreach ($emailResearchIdPairings as $emailPair) {
            $userId = $this->userModelUtility->find($emailPair['email']);
            if(null === $userId) {
                array_push($bad, $emailPair);
            } else {
                array_push($good, [$emailPair, 'user_id' => $userId]);
            }
        }

        return ['good' => $good, 'bad' => $bad];
    }

}