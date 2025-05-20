<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Design;
use App\Models\RollsReel;
use App\Models\PurchaseOrder;
use Inertia\Inertia;

class rollsReels extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('rr/index', [
            "rr" => RollsReel::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('rr/create', [
            "Design" => Design::latest()->get(),
            "po" => PurchaseOrder::latest()->get(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'po_number' => 'required|string|max:255',
            'roll_number' => 'required|string|max:255',
            'number_of_reels' => 'required|string|max:255',
            'reel_design_1' => 'required|string|max:255',
            'reel_design_2' => 'string|max:255',
            'reel_design_3' => 'string|max:255',
            'reel_design_4' => 'string|max:255',
            'reel_design_5' => 'string|max:255',
            'reel_design_6' => 'string|max:255',
            'reel_design_7' => 'string|max:255',
        ]);

        $rr = RollsReel::create([
            'po_number' => $request->po_number,
            'roll_number' => $request->roll_number,
            'number_of_reels' => $request->number_of_reels,
            'reel_design_1' => $request->reel_design_1,
            'reel_design_2' => $request->reel_design_2,
            'reel_design_3' => $request->reel_design_3,
            'reel_design_4' => $request->reel_design_4,
            'reel_design_5' => $request->reel_design_5,
            'reel_design_6' => $request->reel_design_6,
            'reel_design_7' => $request->reel_design_7,
        ]);
        return redirect()->route('rr.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $rr = RollsReel::find($id);
        return Inertia::render('rr/edit', [
            'rr' => $rr,
            "Design" => Design::latest()->get(),
            "po" => PurchaseOrder::latest()->get(),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'po_number' => 'required|string|max:255',
            'roll_number' => 'required|max:255',
            'number_of_reels' => 'required|string|max:255',
            'reel_design_1' => 'required|string|max:255',
            'reel_design_2' => 'string|max:255',
            'reel_design_3' => 'string|max:255',
            'reel_design_4' => 'string|max:255',
            'reel_design_5' => 'string|max:255',
            'reel_design_6' => 'string|max:255',
            'reel_design_7' => 'string|max:255',
        ]);

        $rr = RollsReel::find($id);
        $rr->po_number = $request->po_number;
        $rr->roll_number = $request->roll_number;
        $rr->number_of_reels = $request->number_of_reels;
        $rr->reel_design_1 = $request->reel_design_1;
        $rr->reel_design_2 = $request->reel_design_2;
        $rr->reel_design_3 = $request->reel_design_3;
        $rr->reel_design_4 = $request->reel_design_4;
        $rr->reel_design_5 = $request->reel_design_5;
        $rr->reel_design_6 = $request->reel_design_6;
        $rr->reel_design_7 = $request->reel_design_7;

        $rr->save();
        return redirect()->route('rr.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        RollsReel::destroy($id);
        return redirect()->route('rr.index');
    }
}
