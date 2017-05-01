<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Good extends Model
{
    protected $table = 'goods';
    protected $fillable = [
        'name',
        'catalog_id',
        'user_id',
        'description',
        'text',
        'title',
        'video_link',
        'map',
        'price',
        'old_price'
    ];

    public function getGoodJSON(){
        return $this->get()->toArray();
    }
    public function getGoodsByCategoryId($category_id){
        //Chasti_tela::where('nazvanie', '=', 'Руки')->update(['nazvanie' => 'Шеяqqq', 'poradkovii_nomer' => '1', 'funkcii' => 'werwer']);//Редактирование с помощью WHERE
        return $this->where('catalog_id', '=', $category_id )->get()->toArray();
    }
}
