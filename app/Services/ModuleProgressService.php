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
        $response = [
            'user_id' => $data['user_id'],
            'current_module' => '',
            'current_page' => 0,
            'max_page' => 0,
            'expiration_date' => Carbon::now()->addDays(config('app.days_to_expire'))->toDateTimeString(),
            'completed_at' => null,
            'created_at' => null,
            'updated_at' => null
        ];
        $moduleProgress = ModuleProgress::where('user_id',$data['user_id'])->orderBy('created_at', 'DESC')->get();
        if (count($moduleProgress) === 0) {
            return $response;
        }
        return $moduleProgress->toArray();
    }

    public function setModuleProgress($data)
    {
        $moduleProgress = ModuleProgress::where('user_id', $data['user_id'])
        ->where('current_module', $data['current_module'])
        ->whereNull('completed_at')
        ->first();

        if ($moduleProgress === null) {
            ModuleProgress::create([
                'user_id' => $data['user_id'],
                'current_module' => $data['current_module'],
                'current_page' => $data['current_page'],
                'max_page' => $data['max_page'],
                'expiration_date' => Carbon::now()->addDays(config('app.days_to_expire'))->toDateTimeString(),
            ]);
            return 'true';
        } else {
            $moduleProgress->current_page = $data['current_page'];
            $moduleProgress->max_page = $data['max_page'];
            $moduleProgress->touch();
            $moduleProgress->save();
            return 'true';
        }
        return 'false';
    }

    public function moduleComplete($data)
    {
        $moduleComplete = ModuleProgress::where('user_id', $data['user_id'])
        ->where('current_module', $data['current_module'])
        ->whereNull('completed_at')
        ->first();
        if ($moduleComplete == null) {
            return null;
        }
        $moduleComplete->completed_at = Carbon::now()->toDateTimeString();
        $moduleComplete->touch();
        $moduleComplete->save();
        $newModule = $this->createNewModule($data);
        if ($newModule !== null) {
            return true;
        }
        return null;
    }

    public function createNewModule($data)
    {
        $moduleProgress = ModuleProgress::create([
            'user_id' => $data['user_id'],
            'current_module' => $data['next_module'],
            'current_page' => 0,
            'max_page' => 0,
            'expiration_date' => Carbon::now()->addDays(config('app.days_to_expire')+config('app.days_to_release'))->toDateTimeString(),
        ]);
        return $moduleProgress;
    }

    public function moduleExists($data)
    {
        $moduleProgress = ModuleProgress::where('user_id', $data['user_id'])->whereNotNull('expiration_date')->orderBy('created_at', 'DESC')->first();
        if ($moduleProgress === null) {
            return 'false';
        }
        return 'true';
    }
}
