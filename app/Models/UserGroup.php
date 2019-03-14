<?php

declare(strict_types=1);

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserGroup extends Model
{
    protected $table = 'user_groups';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'user_group', 'remember_token', 'display_name',
    ];
    public function getUserRole()
    {
        return $this->belongsTo('App\Models\UserGroup');
    }


}
