<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    $response = array("message" => "lukehendriks.net API endpoint");
    return json_encode($response);
});

$router->post('/validate_recaptcha_v3', ['uses' => 'ValidateRecaptchaV3Controller@validate_recaptcha_v3']);

$router->post('/contact_mail', ['uses' => 'ContactMailController@send_mail']);