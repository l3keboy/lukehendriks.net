<!doctype html>
<html>
    <head>
        <title>Lukehendriks.net contact form</title>
    </head>
    <body style="font-size: 20px;">
        <label style="margin-bottom: 0px; font-size: 24px;">Hoi Luke,</label><br>
        <label style="margin-top: 5px; font-size: 20px;">{{ $data['sender_name'] }} wil graag contact met je!</label><br><br>
        <label style="font-size: 20px;">Bericht:</label><br>----------<br>
        {{ $data['sender_message'] }}
    </body>
</html>