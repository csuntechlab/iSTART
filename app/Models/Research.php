<?php

namespace App\Models;

use App\Models\User;

use Illuminate\Database\Eloquent\Model;

class Research extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_email', 'research_id'
    ];

    public function user(){
        return $this->hasOne('App\Models\User', 'email', 'user_email');
    }
}
