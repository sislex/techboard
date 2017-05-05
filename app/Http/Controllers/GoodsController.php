<?php

namespace App\Http\Controllers;

use App\Good;

use Illuminate\Http\Request;

class GoodsController extends Controller
{
    public function getGoodJSON(){
        $input = \Request::all();

        $Good = new Good();
        $goodResponse = $Good->getGoodsByCategoryId($input['catalog_id']);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }

    public function getOneGoodJSON(){
        $input = \Request::all();

        $Good = new Good();
        $goodResponse = $Good->getGoodById($input['id']);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }

    public function getUserGoodJSON(){
        $input = \Request::all();

        $Good = new Good();
        $goodResponse = $Good->getGoodByUser($input['user_id']);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }

    public function editGood(){
        $input = \Request::all();
        
        $Good = new Good();
        $goodResponse = $Good->getEditGoodById($input);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;
        
    }

    public function delGood(){
        $input = \Request::all();

        $Good = new Good();
        $goodResponse = $Good->getDelGoodById($input);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }

}
