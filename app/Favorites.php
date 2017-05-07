<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorites extends Model
{
    protected $table = 'favorites';
    protected $fillable = [
        'user_id',
        'good_id'
    ];

    public function addToFavorites($input){
        return $this->create([
            'user_id' => $input['user_id'], 'good_id' => $input['good_id']
        ]);
    }

    public function getAllFavorites($input){
        $array = $this->where('user_id', '=', $input['user_id'] )->orderBy('id', 'DESC')->get()->toArray();
        $good_keys = [];
        foreach ($array as $value){
            $good_keys[] = $value['good_id'];
        }
        return $good_keys;
    }
}
