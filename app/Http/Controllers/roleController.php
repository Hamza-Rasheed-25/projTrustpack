<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class roleController extends Controller
{
    // public function admin(): Response
    // {
    //     //this is like index of admin panel
    //     return Inertia::render('dashboard/admin-panel',[]);
    // }
    public function printer(): Response
    {
        return Inertia::render('dashboard/printer');
    }
    public function laminator(): Response
    {
        return Inertia::render('dashboard/laminator');
    }
    public function slitter(): Response
    {
        return Inertia::render('dashboard/slitter');
    }
    public function doctor(): Response
    {
        return Inertia::render('dashboard/doctor');
    }
    public function mhs(): Response
    {
        return Inertia::render('dashboard/mhs');
    }
}
