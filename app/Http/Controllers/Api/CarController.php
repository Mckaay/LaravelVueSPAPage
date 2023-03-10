<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCarsRequest;
use App\Http\Resources\CarResource;
use Illuminate\Http\Request;
use App\Models\Car;
use Illuminate\Support\Facades\Gate;

class CarController extends Controller
{
    public function index(){
        if(request('search') != ''){
            $cars = Car::where('company','like', '%'.request('search').'%')->
                orWhere('model','like', '%'.request('search').'%')->
                    orWhere('price','like', '%'.request('search').'%')->
                        orWhere('year','like', '%'.request('search').'%')
                        ->paginate(5);
                return CarResource::collection($cars);
        } else {
            return CarResource::collection(Car::paginate(5));
        }
    }

    public function store(StoreCarsRequest $request) {

        if(Gate::allows('isAdmin',auth()->user())) {
            $car = Car::create($request->validated());
            return new CarResource($car);
        } else {
            return response()->json(['error' => 'Unauthorized'],403);
        }
    }

    public function show(Car $car){
        return new CarResource($car);
    }
    public function update(Car $car,StoreCarsRequest $request)
    {
        $car->update($request->validated());
        return new CarResource($car);
    }
    public function destroy(Car $car)
    {
        if(Gate::allows('isAdmin',auth()->user())){
            $car->delete();
            return response()->json(null,204);
        }
        else{
            return response()->json(['error' => 'Unauthorized'],403);
        }
    }
}
