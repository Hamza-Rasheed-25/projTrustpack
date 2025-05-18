<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductionError extends Model
{
    use HasFactory;

    protected $fillable = [
        'po_number',
        'roll_number',
        'from_position',
        'to_position',
        'length',
        'reel_id',
        'error_stage',
        'error_id',
        'comment',
    ];

    public function purchaseOrder(): BelongsTo
    {
        return $this->belongsTo(PurchaseOrder::class, 'po_number', 'po_number');
    }
}