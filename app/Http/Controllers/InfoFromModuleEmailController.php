<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contracts\InfoFromModuleEmailContract;


class InfoFromModuleEmailController extends Controller
{
    protected $infoFromModuleUtility;

    public function __construct(InfoFromModuleEmailContract $infoFromModuleUtility)
    {
        $this->infoFromModuleUtility = $infoFromModuleUtility;
    }
    public function sendModuleInfo(Request $request)
    {
        $validator = $request->validate([
            'module_data' => 'required',
        ]);

        $data = [
            'module_data' => $request->module_data,
        ];

        $this->infoFromModuleUtility->sendEmailWithInfoFromModule($data);
    }
}
