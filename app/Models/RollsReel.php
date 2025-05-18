<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class RollsReel extends Model
{
    use HasFactory;

    protected $fillable = [
        'po_number',
        'roll_number',
        'number_of_reels',
        'reel_design_1',
        'reel_design_2',
        'reel_design_3',
        'reel_design_4',
        'reel_design_5',
        'reel_design_6',
        'reel_design_7',
    ];

    public function purchaseOrder(): BelongsTo
    {
        return $this->belongsTo(PurchaseOrder::class, 'po_number', 'po_number');
    }

    // If you decide to have a separate reels table later, you might add a hasMany relationship here.
}