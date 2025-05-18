<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\PurchaseOrder;
use App\Models\User;

class purchaseOrders extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('po/index', [
            "po" => PurchaseOrder::all(),
            "users" => User::all(),

        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('po/create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'po_number' => 'required|string|max:255',
        ]);
        $po = PurchaseOrder::create([
            'po_number' => $request->po_number,
        ]);
        return redirect()->route('po.index');
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
        $po = PurchaseOrder::find($id);
        return Inertia::render('po/edit', [
            'po' => $po,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'po_number' => 'required|string|max:255'
        ]);

        $po = PurchaseOrder::find($id);
        $po->po_number = $request->po_number;

        $po->save();
        return redirect()->route('po.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        PurchaseOrder::destroy($id);
        return redirect()->route('po.index');
    }
}
