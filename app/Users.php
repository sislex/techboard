<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $table = 'users';
    protected $fillable = [
        'name',
        'role',
        'email',
        'password',
        'phone',
        'remember_token',
        'created_at',
        'updated_at'
    ];

    public function getUser($id){
        return $this->where('id', '=', $id )->get()->toArray();
    }

    public function updateUser($id, $name, $email, $phone){
        return $this->find($id)->update(['name' => $name, 'email' => $email, 'phone' => $phone]);//Редактирование только по ID
    }
}
