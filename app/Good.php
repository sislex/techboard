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
}
