<?php

namespace App\Http\Controllers;

use App\Good;
use App\Favorites;

use Illuminate\Http\Request;

class GoodsController extends Controller
{
    public function getAllFavorites(){
        $input = \Request::all();
        $input['user_id'] = 1;

        $Favorites = new Favorites();
        $goods_id = $Favorites->getAllFavorites($input);
        $Good = new Good();
        $goodResponse =$Good->getAllFavorites($goods_id);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }
    
    public function addToFavorites(){
        $input = \Request::all();
//        $input['user_id'] = 1;
//        $input['good_id'] = 3;

        $Favorites = new Favorites();
        $goodResponse = $Favorites->addToFavorites($input);
        return response()
            ->json($goodResponse)
            ->header('Access-Control-Allow-Origin', '*')
            ->header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
            ->header('Access-Control-Max-Age', '1000')
            ->header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, X-Auth-Token, X-CSRF-TOKEN')
            ;

    }

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
//        $input['id'] = 1;
//        $input['name'] ='МТЗ-82 редактирование';
//        $input['catalog_id'] ='2';
//        $input['description'] ='МТЗ-82 «Белорус» представляет собой универсальный, пропашной, колесный, полноприводной трактор с малой кабиной, который выпускается на Минском тракторном заводе. Трактор зарекомендовал себя надежным и высокопроизводительным агрегатом, который отличается простотой в эксплуатации и обслуживании.редактирование';
//        $input['id'] ='1';
//        $input['map'] ='редактирование';
//        $input['price'] ='80000';
//        $input['text'] ='МТЗ-82 «Белорус» представляет собой универсальный, пропашной, колесный, полноприводной трактор с малой кабиной, который выпускается на Минском тракторном заводе. Трактор зарекомендовал себя надежным и высокопроизводительным агрегатом, который отличается простотой в эксплуатации и обслуживании.редактирование';
//        $input['title'] =null;
//        $input['user_id'] ='1';
//        $input['video_link'] ='https://www.youtube.com/watch?v=E59TJy-xT68редактирование';


        $Good = new Good();
        $goodResponse = $Good->getEditGoodById($input);
        return response()
            ->json($goodResponse)
//            ->json($input)
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
