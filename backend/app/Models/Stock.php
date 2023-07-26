<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/*
 * @mixin \Eloquent
 */
class Stock extends Model
{
    protected $fillable = ['type', 'quantity'];
    public $incrementing = false;

    protected $primaryKey = 'type';
    protected $keyType = 'string';

    protected $table = 'stock';

    public $timestamps = false;
}
