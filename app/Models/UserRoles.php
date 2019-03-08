<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRoles extends Model
{
    protected $primaryKey = 'user_email';
    public $incrementing = false;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_email', 'user_role', 'remember_token', 'display_name',
    ];

    public function userRole()
    {
        return $this->hasOne('App\Models\User', 'email','user_email');

    }


}
