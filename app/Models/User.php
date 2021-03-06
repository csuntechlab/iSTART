<?php

namespace App\Models;

use App\Models\Participant;
use CSUNMetaLab\Authentication\MetaUser;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends MetaUser
{
    use Notifiable;

    protected $primaryKey = 'user_id';
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

    public function participant(){
        return $this->hasOne('App\Models\Participant', 'user_id');
    }

    public function getUserGroup()
    {
        return $this->hasOne('App\Models\UserGroup', 'user_id', 'user_id');
    }

    public function moduleProgress()
    {
        return $this->hasMany('App\Models\ModuleProgress', 'user_id', 'user_id');
    }

    public function individual()
    {
        return $this->hasOne('App\Models\Individual', 'individuals_id', 'user_id');
    }

}
