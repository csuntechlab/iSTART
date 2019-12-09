<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Individual extends Model
{
    protected $table = 'nemo.individuals';

    protected $primaryKey = 'individuals_id';

    public $incrementing = false;
}
