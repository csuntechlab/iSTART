<?php

namespace App\Models;

use App\Models\Research;
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

    public function research(){
        return $this->hasOne('App\Models\Research', 'user_id');
    }

    public function getUserGroup()
    {
        return $this->hasOne('App\Models\UserGroup');
    }
}
