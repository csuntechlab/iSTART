<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserRoles extends Model
{
    protected $table = 'user_roles';
    protected $primaryKey = 'user_id';
    public $incrementing = false;


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'user_role', 'remember_token', 'display_name',
    ];

    public function userRole()
    {
        return $this->hasOne('App\Models\User', 'user_id','user_id');

    }


}
