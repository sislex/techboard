<?php

namespace App\Http\Controllers;

use App\Users;

use Illuminate\Http\Request;

class UsersController extends Controller
{

    public function createUser(){
        $input = \Request::all();

        $Users = new Users();
        dd($input);
        $goodResponse = $Users->createUser($input['name'], $input['email'], $input['password']);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }
    
    
    public function getUserJSON(){
        $input = \Request::all();

        $Users = new Users();
        $goodResponse = $Users->getUser($input['id']);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }

    public function updateUser(){
        $input = \Request::all();

        $Users = new Users();
        $userResponse = $Users->updateUser($input['id'], $input['name'], $input['email'], $input['phone']);

        return response()
            ->json($userResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }

    public function editPasswordUser(){
        $input = \Request::all();

        $Users = new Users();
        $userResponse = $Users->updatePasswordUser($input);

        return response()
            ->json($userResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
    }

}
