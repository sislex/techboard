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
    public function getEditGoodById($input){
        return $this->find($input['id'])->update($input);//Редактирование только по ID
//        if(isset($input['id'])){
//            if(isset($input['title'])) {
//                return $this->find($input['id'])->update($input);//Редактирование только по ID
//            }
//            else{
//                return $this->find($input['id'])->update([
//                    'name' => $input['name'], 'catalog_id' => $input['catalog_id'],'user_id' => $input['user_id'],
//                    'description' => $input['description'], 'text' => $input['text'], 'title' => '',
//                    'video_link' => $input['video_link'], 'map' => $input['map'], 'price' => $input['price']
//                ]);//Редактирование только по ID
//            }
//        }
//        else{
//            if(isset($input['title'])){
//                return $this->create([
//                    'name' => $input['name'], 'catalog_id' => $input['catalog_id'],'user_id' => $input['user_id'],
//                    'description' => $input['description'], 'text' => $input['text'], 'title' => $input['title'],
//                    'video_link' => $input['video_link'], 'map' => $input['map'], 'price' => $input['price']
//                ]);
//            }
//            else{
//                return $this->create([
//                    'name' => $input['name'], 'catalog_id' => $input['catalog_id'],'user_id' => $input['user_id'],
//                    'description' => $input['description'], 'text' => $input['text'],
//                    'video_link' => $input['video_link'], 'map' => $input['map'], 'price' => $input['price']
//                ]);
//            }
//
//        }
    }

    public function getDelGoodById($input){
        return $this->find($input['id'])->delete();//Удаление по ID;
    }
}
