<?php

namespace App\Http\Controllers;

use App\Catalog;
use Illuminate\Http\Request;
class CatalogController extends Controller
{
    public function getCatalogJSON(){
        $Catalog = new Catalog();
        $catalogResponse = $Catalog->getCatalogJSON();
        return response()
            ->json($catalogResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ;

    }

}
