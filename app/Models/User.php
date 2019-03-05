<?php

namespace App\Models;

use App\Models\UserResearch;
use CSUNMetaLab\Authentication\MetaUser;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends MetaUser
{
    use Notifiable;

    public $incrementing = false;
    /**
     * The attributes that are mass assignable.
     *
     * @var array primary string that is a string eloquent
     */
    protected $fillable = [
        'user_id', 'username', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function passUserIdToUserResearch(){
        return $this->hasOne('App\Models\UserResearch', 'user_id');
    }

}
