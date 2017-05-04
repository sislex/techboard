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
    public function getGoodById($id){
        return $this->find($id)->toArray();
    }
    public function getGoodByUser($user_id){
        return $this->where('user_id', '=', $user_id )->get()->toArray();
    }
    public function getEditGoodById($id, $name, $catalog_id, $user_id, $description, $text, $video_link, $imap, $price){
//        if($id > 0){
            //Chasti_tela::find(6)->update(['nazvanie' => 'Шеяqqq', 'poradkovii_nomer' => '1', 'funkcii' => 'werwer']);//Редактирование только по ID
//            ($this->find($id)->get('price'))
//        return $this->find($id)->update(['name' => $name, 'email' => $email, 'phone' => $phone]);//Редактирование только по ID
        return $this->find($id)->update(['name' => $name]);//Редактирование только по ID
//        return $this->find($id)->update([
//                'name' => $name, 'catalog_id' => $catalog_id, 'description' => $description, 'text' => $text,
//                'title' => $catalog_id . " " . $name, 'video_link' => $video_link, 'map' => $imap,
//                'old_price' => "55555", 'price' => $price
//            ]);
//        }
    }
}
