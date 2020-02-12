<?php

namespace App\Services;
use App\Contracts\ModuleProgressContract;
use App\Mail\ExitSurveyEmail;
use App\Models\ModuleProgress;
use App\Models\User;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;


class ModuleProgressService implements ModuleProgressContract
{

    public function getModuleProgress($data): array
    {
        $response = [
            'user_id' => $data['user_id'],
            'current_module' => '',
            'current_page' => 0,
            'max_page' => 0,
            'completed_at' => null,
            'created_at' => null,
            'updated_at' => null
        ];
        $moduleProgress = ModuleProgress::where('user_id',$data['user_id'])->orderBy('created_at', 'DESC')->get();
        if (count($moduleProgress) === 0) {
            $user = User::with('getUserGroup', 'participant')->whereHas('getUserGroup')->whereHas('participant')->find($data['user_id']);
            if ($user->getUserGroup !== null && $user !== null) {
                $response['expiration_date'] = Carbon::parse($user->participant->created_at)->addDays(config('app.days_to_expire'))->toDateTimeString();
                if ($user->getUserGroup->user_group === 'comparison') {
                    $response['expiration_date'] = Carbon::parse($user->participant->created_at)->addDays(30)->toDateTimeString();
                }
                return $response;
            }
        }
        return $moduleProgress->toArray();
    }

    public function setModuleProgress($data)
    {
        $moduleProgress = ModuleProgress::where('current_module', $data['current_module'])
        ->find($data['user_id']);

        if ($moduleProgress === null) {
            ModuleProgress::create([
                'user_id' => $data['user_id'],
                'current_module' => $data['current_module'],
                'current_page' => $data['current_page'],
                'max_page' => $data['max_page'],
                'expiration_date' => $data['expiration_date'],
            ]);
            return 'true';
        } else {
            DB::table('module_progresses')
                ->where('user_id', $data['user_id'])
                ->where('current_module', $data['current_module'])
                ->update([
                    'current_page' => $data['current_page'],
                    'max_page' => $data['max_page'],
                    'updated_at' => Carbon::now()->toDateTimeString()
                    ]);
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
        if ($moduleComplete === null) {
            return false;
        }
        DB::table('module_progresses')
            ->where('user_id', $data['user_id'])
            ->where('current_module', $data['current_module'])
            ->update([
                'completed_at' => Carbon::now()->toDateTimeString(),
                'updated_at' => Carbon::now()->toDateTimeString()
            ]);
        if ($data['next_module'] === null && $data['current_module'] === 'illicit drugs') {
            $user = User::witH('getUserGroup')->find($data['user_id']);
            if ($user !== null) {
                Mail::to($user->email)->cc(env('RECEIVE_EMAIL'))->send(new ExitSurveyEmail($user));
                return true;
            }
            return false;
        } else if ($data['next_module'] === null && $data['current_module'] === 'comparison') {
            return true;
        } else {
            $newModule = $this->createNewModule($data);
            if ($newModule !== null) {
                return true;
            }
        }
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
