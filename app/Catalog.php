<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Catalog extends Model
{
    protected $table = 'catalog';
    protected $fillable = [
        'parent_id',
        'name',
        'order',
        'title',
        'description',
        'keywords',
        'text'
    ];

    public function getCatalogJSON(){
        return $this->orderBy('order', 'asc')->get()->toArray();
    }
}
