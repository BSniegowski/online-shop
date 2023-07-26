<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\File;


class GalleryController extends Controller
{
    public function getAllFilenames()
    {
        // Get all files in the 'public/images/gallery' directory
//        $files = Storage::files('/public/images/gallery');
        $path = public_path() . '/images/gallery';
        $files = File::allFiles($path);

        // Extract filenames without the path and extension
        $filenames = array_map(function ($file) {
            return pathinfo($file, PATHINFO_BASENAME);
        }, $files);


//        dd($files);

        return response()->json($filenames);
    }
}
