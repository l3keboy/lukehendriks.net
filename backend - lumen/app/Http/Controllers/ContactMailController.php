<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\SendMail;

class ContactMailController extends Controller 
{
    public function send_mail(Request $request) 
    {
        $sender_name = $request->json()->get("sender_name");
        $sender_email = $request->json()->get("sender_email");
        $sender_subject = $request->json()->get("sender_subject");
        $sender_message = $request->json()->get("sender_message");

        $stripped_sender_name = strip_tags($sender_name);
        $stripped_sender_email = strip_tags($sender_email);
        $stripped_sender_subject = strip_tags($sender_subject);
        $stripped_sender_message = strip_tags($sender_message);

        $data = array(
            'sender_name' => $stripped_sender_name,
            'sender_email' => $stripped_sender_email,
            'sender_subject' => $stripped_sender_subject,
            'sender_message' => $stripped_sender_message
        );

        try {
            Mail::to(env("REACT_APP_CONTACT_MAIL"))->send(new SendMail($data));
            $response = array("response" => array("status" => "success", "content" => array("sender_name" => $stripped_sender_name)));
            return json_encode($response);
        } catch (\Exception $e) {
            error_log($e);
            $response = array("response" => array("status" => "failed", "content" => "Something went wrong with sending the mail!"));
            return json_encode($response);
        }
    }
}