<?php

use \Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\roleController;
use App\Http\Controllers\userController;
use App\Http\Controllers\purchaseOrders;
use App\Http\Controllers\designs;

    Route::get('/', function () {
        return Auth::check() ? redirect()->route('dashboard') : redirect()->route('login');
    })->name('home');

    Route::middleware(['auth', 'verified'])->group(function () {
        Route::get('dashboard', function () {
            return Inertia::render('dashboard');
        })->name('dashboard');
    });


    Route::resource(name: 'users', controller: userController::class)->middleware(['auth','verified', 'role:admin']);
    Route::resource(name: 'po', controller: purchaseOrders::class)->middleware(['auth','verified', 'role:admin']);
    Route::resource(name: 'design', controller: designs::class)->middleware(['auth','verified', 'role:admin']);
    // Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    // Route::get('/admin-panel',[roleController::class,'admin'])->name('admin-panel');
    // });
    Route::middleware(['auth', 'verified', 'role:printer'])->group(function () {
    Route::get('/printer',[roleController::class,'printer'])->name('printer');
    });
    Route::middleware(['auth', 'verified', 'role:laminator'])->group(function () {
    Route::get('/laminator',[roleController::class,'laminator'])->name('laminator');
    });
    Route::middleware(['auth', 'verified', 'role:slitter'])->group(function () {
    Route::get('/slitter',[roleController::class,'slitter'])->name('slitter');
    });
    Route::middleware(['auth', 'verified', 'role:doctor'])->group(function () {
    Route::get('/doctor',[roleController::class,'doctor'])->name('doctor');
    });
    Route::middleware(['auth', 'verified', 'role:mhs'])->group(function () {
    Route::get('/mhs',[roleController::class,'mhs'])->name('mhs');
    });


    // Route::middleware(['auth', 'verified'])->group(function () {
    // });


require __DIR__.'/settings.php';
require __DIR__.'/auth.php';