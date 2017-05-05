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

Route::post('/api/registration', 'UsersController@createUser');
Route::get('/api/registration', 'UsersController@createUser');
Route::post('/api/goods', 'GoodsController@getGoodJSON');
Route::post('/api/good', 'GoodsController@getOneGoodJSON');
Route::post('/api/user-dashboard-goods', 'GoodsController@getUserGoodJSON');
Route::post('/api/users', 'UsersController@getUserJSON');
Route::post('/api/user-edit-password', 'UsersController@editPasswordUser');
Route::post('/api/user-edit', 'UsersController@updateUser');
Route::post('/api/good-edit', 'GoodsController@editGood');
Route::get('/api/good-edit', 'GoodsController@editGood');
Route::post('/api/good-del', 'GoodsController@delGood');

Route::post('/api/catalog', 'CatalogController@getCatalogJSON');


Auth::routes();

Route::get('/home', 'HomeController@index');
