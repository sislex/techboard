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

    public function getAllFavorites($goods_id){
        return $goodsFavorites = $this->whereIN('id', $goods_id)->get()->toArray();
    }
    public function getGoodJSON(){
        return $this->get()->toArray();
    }
    public function getGoodsByCategoryId($category_id){
        return $this->where('catalog_id', '=', $category_id )->get()->toArray();
    }
    public function getGoodById($id){
        return $this->find($id)->toArray();
    }
    public function getGoodByUser($user_id){
        return $this->where('user_id', '=', $user_id )->get()->toArray();
    }
    public function getEditGoodById($input){
        if(isset($input['id'])){
            return $this->find($input['id'])->update($input);//Редактирование только по ID
        }
        else
        {
            return $this->create([
                'name' => $input['name'], 'catalog_id' => $input['catalog_id'],'user_id' => $input['user_id'],
                'description' => $input['description'], 'text' => $input['text'],
                'video_link' => $input['video_link'], 'map' => $input['map'], 'price' => $input['price']
            ]);
        }
    }

    public function getDelGoodById($input){
        return $this->find($input['id'])->delete();//Удаление по ID;
    }
}
