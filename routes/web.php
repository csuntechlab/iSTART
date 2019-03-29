<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('loginVerification', 'LoginController@authenticateUser');
Route::get('logout','LoginController@logout');

Route::get('/get_group/{user_id}','UserGroupController@getGroup');

Route::get('/sendCompletModuleMailTest','UserCompletesModuleEmailController@sendMail');
Route::get('/sendMailTest','MailController@sendMail');

Route::get('/user','UserGroupController@sortAuthenticatedUsers');

Route::get('/getModuleProgress/{user_id}/{current_module}','ModuleProgressController@getModuleProgress');
Route::post('/setModuleProgress','ModuleProgressController@setModuleProgress');
