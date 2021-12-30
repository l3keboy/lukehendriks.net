<?php
namespace App\Mail;
 
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;
 
class SendMail extends Mailable 
{
    use Queueable, SerializesModels;
    public $data;
    
    // Create message instance
    public function __construct($data)
    {
        $this->data = $data;
    }
    // Build the message.
    public function build() {
        return $this
            ->from($address = $this->data['sender_email'], $name = $this->data['sender_name'])
            ->view('contact-email');
    }
}