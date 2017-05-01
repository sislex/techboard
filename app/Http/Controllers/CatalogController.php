<?php

namespace App\Http\Controllers;

use App\Catalog;
use Illuminate\Http\Request;
class CatalogController extends Controller
{
    public function getCatalogJSON(){
        $input = \Request::all();
//        dd($input["id"]);

        $Catalog = new Catalog();
        $catalogResponse = $Catalog->getCatalogJSON();
        return response()
            ->json($catalogResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }

}
