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

Route::get('/{any}', 'SpaController@index')->where('any', '.*');

Route::post('loginVerification', 'LoginController@authenticateUser');
Route::get('logout','LoginController@logout');

Route::get('/get_group/{user_id}','UserGroupController@getGroup');
