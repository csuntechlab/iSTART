<?php

namespace App\Http\Controllers;


use App\Models\ModuleProgress;
use App\Jobs\SendReminderModuleEmail;
use Illuminate\Http\Request;
use App\Contracts\ModuleProgressContract;
use App\Contracts\UserCompletesModuleEmailContract;



class ModuleProgressController extends Controller
{
    protected $moduleProgressUtility = null;
    protected $userCompletesEmailUtility = null;

    public function __construct(
        ModuleProgressContract $moduleProgressContract,
        UserCompletesModuleEmailContract $userCompletesModuleContract
        )
    {
        $this->moduleProgressUtility = $moduleProgressContract;
        $this->userCompletesEmailUtility = $userCompletesModuleContract;
    }

    public function getModuleProgress(Request $request)
    {
        $validator = $request->validate([
            'user_id' => 'required',
        ]);

        $data = [
            'user_id' => $request->user_id,
        ];

        return $this->moduleProgressUtility->getModuleProgress($data);
    }

    public function setModuleProgress(Request $request)
    {
        $validator = $request->validate([
            'user_id' => 'required',
            'current_module' => 'required',
            'current_page' => 'required',
            'max_page' => 'required'
        ]);

        $data = [
            'user_id' => $request->user_id,
            'current_module' => $request->current_module,
            'current_page' => $request->current_page,
            'max_page' => $request->max_page
        ];

        return $this->moduleProgressUtility->setModuleProgress($data);
    }

    public function moduleComplete(Request $request)
    {
        $validator = $request->validate([
            'user_id' => 'required',
            'next_module' => 'required',
            'current_module' => 'required'
        ]);

        $result = $this->moduleProgressUtility->moduleComplete($validator);

        if ($result == true) {
            $this->userCompletesEmailUtility->sendMailToStudent();
            $this->userCompletesEmailUtility->sendMailToAdmin();
            return response()->json('true');
        }

        return response()->json(null);
    }
}
