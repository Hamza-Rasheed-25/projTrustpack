<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PurchaseOrder extends Model
{
    use HasFactory;

    // protected $primaryKey = 'po_number';
    // public $incrementing = false;
    // protected $keyType = 'string';

    protected $fillable = [
        'po_number',
    ];
}