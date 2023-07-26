<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stock;

class StockController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Http\JsonResponse
    {
        $products = Stock::all();
        return response()->json($products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $validatedData = $request->validate([
            'type' => 'required|string|max:255',
            'quantity' => 'required|integer',
        ]);

        Stock::create($validatedData);
        return response()->json(['message' => 'Resource added successfully'], 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $type): \Illuminate\Http\JsonResponse
    {
        $product = Stock::findOrFail($type);
        return response()->json($product['quantity']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        // Find the resource to be updated
        $resource = Stock::find($request['type']);

        // Check if the resource exists
        if (!$resource) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        // Validate the input data (optional but recommended)
        $validatedData = $request->validate([
            'type' => 'required|string',
            'quantity' => 'required|integer',
        ]);

        // Update the resource with the validated data
        $resource->update($validatedData);

        return response()->json(['message' => 'Resource updated successfully'], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $type)
    {
        $resource = Stock::find($type);

        if (!$resource) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        $resource->delete();

        return response()->json(['message' => 'Resource deleted successfully'], 200);
    }
}
