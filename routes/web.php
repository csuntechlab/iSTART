<?php

use Illuminate\Support\Facades\Route;

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

Route::post('login-verification', 'LoginController@authenticateUser');
Route::get('logout','LoginController@logout');
Route::get('/get-group/{user_id}','UserGroupController@getGroup');
Route::post('/send-module-info-mail', 'InfoFromModuleEmailController@sendModuleInfo');
Route::get('/send-mail-test','MailController@sendMail');
Route::get('/send-student-removed-email', 'StudentRemovedFromStudyController@sendStudentRemovedMail');
Route::get('/user','UserGroupController@sortAuthenticatedUsers');
Route::post('/get-module-progress','ModuleProgressController@getModuleProgress');
Route::post('/set-module-progress','ModuleProgressController@setModuleProgress');
Route::post('/verify-excel-sheet', 'AdminController@checkEmailsInJson');
Route::post('/submit-good-participants','ParticipantController@addGoodParticipantsToParticipantsTable');
Route::post('/remove-participant','ParticipantController@removeParticipantFromStudy');
Route::post('/module-complete', 'ModuleProgressController@moduleComplete');
