<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ValidateRecaptchaV3Controller extends Controller 
{
    public function validate_recaptcha_v3(Request $request) 
    {
        $token = $request->json()->get("token");
        $secret = env('REACT_APP_RECAPTCHA_SECRET_KEY');
        $url = env("REACT_APP_RECAPTCHA_URL");
        $full_url = "{$url}?secret={$secret}&response={$token}";

        $recaptcha_response = file_get_contents($full_url);
        $recaptcha_response = json_decode($recaptcha_response);
        
        if ($recaptcha_response->success == true) {
            if ($recaptcha_response->score >= 0.7) {
                $response = array("response" => "success");
                return json_encode($response);
            } else {
                $response = array("response" => "failed");
                return json_encode($response);
            }
        } else {
            $response = array("response" => "failed");
            return json_encode($response);
        }
    }
}