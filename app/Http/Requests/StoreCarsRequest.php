<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreCarsRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'company' => 'required|max:50|regex:/^[\pL\s]+$/u',
            'model' => 'required|max:50|',
            'price' => 'required|max:20|regex:/^[0-9]+$/u',
            'year' => 'required|max:4|regex:/^[0-9]+$/u',
        ];
    }
}
