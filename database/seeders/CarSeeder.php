<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Car;

class CarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Car::create([
            'company' => 'Tesla',
            'model' => 'Model Y Long Range Dual Motor',
            'price' => '60000$',
            'year' => '2020'
        ]);

        Car::create([
            'company' => 'Tesla',
            'model' => 'Model 3 Long Range Dual Motor',
            'price' => '40000$',
            'year' => '2021'
        ]);

        Car::create([
            'company' => 'Tesla',
            'model' => 'Model 3 ',
            'price' => '30000$',
            'year' => '2018'
        ]);

        Car::create([
            'company' => 'BMW',
            'model' => 'i4 eDrive40',
            'price' => '80000$',
            'year' => '2015'
        ]);

        Car::create([
            'company' => 'Kia',
            'model' => 'EV6 GT',
            'price' => '90000$',
            'year' => '2022'
        ]);

        Car::create([
            'company' => 'Kia',
            'model' => 'EV6 GT',
            'price' => '90000$',
            'year' => '2022'
        ]);

        Car::create([
            'company' => 'Kia',
            'model' => 'EV6 GT',
            'price' => '90000$',
            'year' => '2022'
        ]);

        Car::create([
            'company' => 'Kia',
            'model' => 'EV6 GT',
            'price' => '90000$',
            'year' => '2022'
        ]);

        Car::create([
            'company' => 'Kia',
            'model' => 'EV6 GT',
            'price' => '90000$',
            'year' => '2022'
        ]);

        Car::create([
            'company' => 'Kia',
            'model' => 'EV6 GT',
            'price' => '90000$',
            'year' => '2022'
        ]);
    }
}
