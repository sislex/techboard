<?php

namespace App\Http\Controllers;

use App\Good;

use Illuminate\Http\Request;

class GoodsController extends Controller
{
    public function getGoodJSON(){
        $input = \Request::all();
        $input['catalog_id'] = 2;

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
}
