<?php

namespace App\Http\Controllers;

use App\Good;

use Illuminate\Http\Request;

class GoodsController extends Controller
{
    public function getGoodJSON(){
        $Good = new Good();
        $goodResponse = $Good->getGoodJSON();
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ;
    }
}
