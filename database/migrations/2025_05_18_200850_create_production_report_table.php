<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // Schema::create('production_report', function (Blueprint $table) {
        //     $table->id();
        //     $table->timestamps();
        // });
        Schema::create('purchase_orders', function (Blueprint $table) {
            $table->id();
            $table->string('po_number')->unique();
            $table->timestamps();
        });

        Schema::create('designs', function (Blueprint $table) {
            $table->id();
            $table->string('design_id')->unique();
            $table->string('design_name');
            $table->timestamps();
        });

        Schema::create('rolls_reels', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('po_number'); // Match type with purchase_orders.po_number
            $table->integer('roll_number');
            $table->enum('number_of_reels', ['1', '2', '3', '4', '5', '6', '7']);

            $table->string('reel_design_1')->nullable();
            $table->string('reel_design_2')->nullable();
            $table->string('reel_design_3')->nullable();
            $table->string('reel_design_4')->nullable();
            $table->string('reel_design_5')->nullable();
            $table->string('reel_design_6')->nullable();
            $table->string('reel_design_7')->nullable();

            $table->timestamps();
        });

        Schema::create('production_errors', function (Blueprint $table) {
            $table->id();
            $table->string('po_number');
            $table->integer('roll_number');
            $table->integer('from_position');
            $table->integer('to_position');
            $table->integer('length');
            $table->string('reel_id');
            $table->string('error_stage');
            $table->enum('error_id', ['1', '2', '3', '4', '5', '6', '7']);
            $table->text('comment')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Schema::dropIfExists('production_report');
        Schema::dropIfExists('production_errors');
        Schema::dropIfExists('rolls_reels');
        Schema::dropIfExists('designs');
        Schema::dropIfExists('purchase_orders');
    }
};
