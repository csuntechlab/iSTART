<?php

namespace App\Models;

use App\Models\User;

use Illuminate\Database\Eloquent\Model;
 
class Participant extends Model
{
    protected $table = 'participant';
    protected $primaryKey = 'user_id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id', 'participant_id'
    ];

    public function user(){
        return $this->hasOne('App\Models\User', 'email', 'user_id');
    }
}
