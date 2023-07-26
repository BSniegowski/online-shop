<?php

use App\Http\Controllers\GalleryController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StockController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::get('/stock', [StockController::class, 'index']);
Route::get('/stock/{type}', [StockController::class, 'show']);
Route::post('/stock', [StockController::class, 'store']);
Route::put('/stock', [StockController::class, 'update']);
Route::delete('/stock/{type}', [StockController::class, 'destroy']);

Route::get('/gallery', [GalleryController::class, 'getAllFilenames']);
