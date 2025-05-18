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

    public function rollsReels(): HasMany
    {
        return $this->hasMany(RollsReel::class, 'po_number', 'po_number');
    }

    public function productionErrors(): HasMany
    {
        return $this->hasMany(ProductionError::class, 'po_number', 'po_number');
    }
}