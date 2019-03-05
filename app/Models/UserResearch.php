<?php

namespace App\Models;

use App\Models\User;

use Illuminate\Database\Eloquent\Model;

class UserResearch extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'research_id'
    ];
}
