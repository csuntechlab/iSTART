<?php

namespace App\Services;
use App\Models\ModuleProgress;
use App\Contracts\ModuleProgressContract;
use App\Jobs\SendNewModuleEmail;
use Illuminate\Support\Carbon;
use App\Jobs\SendReminderModuleEmail;
use Illuminate\Http\Request;


class ModuleProgressService implements ModuleProgressContract
{

    public function getModuleProgress($data): array
    {
        $moduleProgress = ModuleProgress::where('user_id',$data['user_id'])
                                            ->where('current_module',$data['current_module'])
                                            ->first()
                                            ->toArray();
        
        return [
            'user_id' => $moduleProgress['user_id'],
            'current_module' => $moduleProgress['current_module'],
            'current_page' => $moduleProgress['current_page'],
            'max_page' => $moduleProgress['max_page'],
        ];
    }

    public function setModuleProgress($data)
    {
        $moduleProgress = ModuleProgress::updateOrCreate(
            [
                'user_id' => $data['user_id'], 
                'current_module' => $data['current_module']
            ],
            [
                'current_page' => $data['current_page'], 
                'max_page' => $data['max_page']
            ]
        );
    }

    public function moduleComplete($data){

        $user = $data['user_id'];
        $moduleComplete = ModuleProgress::find($user);

        if($moduleComplete == null){

            return null;
        }

        $job = (new SendNewModuleEmail($moduleComplete))
            ->delay(Carbon::now()->addSeconds(env('MODULE_COMPLETION')));
            dispatch($job);

    }

}