<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Design;

class designs extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //     
        return Inertia::render('design/index', [
            "Design" => Design::latest()->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('design/create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'design_id' => 'required|string|max:255',
            'design_name' => 'required|string|max:255',
        ]);
        $design = Design::create([
            'design_id' => $request->design_id,
            'design_name' => $request->design_name,
        ]);
        return redirect()->route('design.index');
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
        $design = Design::find($id);
        return Inertia::render('design/edit', [
            'design' => $design,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'design_id' => 'required|string|max:255',
            'design_name' => 'required|string|max:255',
        ]);

        $design = Design::find($id);
        $design->design_id = $request->design_id;
        $design->design_name = $request->design_name;

        $design->save();
        return redirect()->route('design.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Design::destroy($id);
        return redirect()->route('design.index');
    }
}
