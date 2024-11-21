<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// route to serve front and that exclude api ((?!api/?).*) and admin ((?!admin/?).
Route::get('/{any}', function () {
    return view('welcome');
})->where('any','^(?!api/?)(?!admin/?).*$');


// route to serve admin include api
Route::get('/admin',function(){
    return view('admin');
});
Route::get('/admin/{any}',function(){
    return view('admin');
})->where('any','.*');
