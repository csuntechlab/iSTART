<?php

namespace App\Http\Controllers;

use App\Contracts\AuthenticationContract;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';
    /**
     *
     * @param AuthenticationContract $authenticationRetriever
     */
    protected $authenticationUtility;
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct(AuthenticationContract $authenticationContract)
    {
        $this->authenticationUtility = $authenticationContract;
    }

    public function authenticateUser(Request $request){

        $credentials = [
            'username'=> $request->username,
            'password'=>$request->password
        ];

        //$credentials = ['username'=>'mbenda.ndour.487@my.csun.edu','password'=>'lastsemester2019.'];

        return $this->authenticationUtility->authenticateUser($credentials);

    }
}
