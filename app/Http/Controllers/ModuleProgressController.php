<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contracts\ModuleProgressContract;


class ModuleProgressController extends Controller
{
    protected $moduleProgressUtility = null;

    public function __construct(ModuleProgressContract $moduleProgressContract)
    {
        $this->moduleProgressUtility = $moduleProgressContract;
    }

    public function getModuleProgress(Request $request)
    {
        $validator = $request->validate([
            'user_id' => 'required',
            'current_module' => 'required',
        ]);

        $data = [
            'user_id' => $request->user_id,
            'current_module' => $request->current_module,
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

        $this->moduleProgressUtility->getModuleProgress($data);
    }

}