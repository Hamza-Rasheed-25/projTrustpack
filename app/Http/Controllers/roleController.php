<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
class roleController extends Controller
{
    public function admin(): Response { return Inertia::render('admin-panel');}
    public function printer(): Response { return Inertia::render('printer');}
    public function laminator(): Response { return Inertia::render('laminator');}
    public function slitter(): Response { return Inertia::render('slitter');}
    public function doctor(): Response { return Inertia::render('doctor');}
    public function mhs(): Response { return Inertia::render('mhs');}
}
