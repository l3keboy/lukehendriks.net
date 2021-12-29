// REQUIRES //
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const striptags = require('striptags');

// FUNCTIONS //
function send_mail(sender_name, sender_email, sender_subject, sender_message, callback) {
    let transporter = nodemailer.createTransport({
        host: process.env.REACT_APP_MAIL_HOST,
        port: process.env.REACT_APP_MAIL_PORT,
        secure: true,
        auth: {
            user: process.env.REACT_APP_MAIL_USER,
            pass: process.env.REACT_APP_MAIL_PASSWORD,
        },
    });

    transporter.sendMail({
        from: sender_email,
        to: process.env.REACT_APP_CONTACT_MAIL,
        subject: sender_subject,
        html: `
        <!doctype html>
        <html>
            <head>
                <title>Lukehendriks.net contact form</title>
            </head>
            <body style="font-size: 20px;">
                <label style="margin-bottom: 0px; font-size: 24px;">Hoi Luke,</label><br>
                <label style="margin-top: 5px; font-size: 20px;">${sender_name} wil graag contact met je!</label><br><br>
                <label style="font-size: 20px;">Bericht:</label><br>----------<br>
                ${sender_message}
            </body>
        </html>
        `,
      }, function(error, info) {
          if (error) {
              callback("error");
          } else {
              callback("success");
          }
      });
}

module.exports = function(app) {
    // CORS //
    app.use(bodyParser.json());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    
    // MAIN //
    app.post("/api/contact_mail", (req, res) => {
        const sender_name = req.body.sender_name;
        const sender_email = req.body.sender_email;
        const sender_subject = req.body.sender_subject;
        const sender_message = req.body.sender_message;

        const stripped_sender_name = striptags(sender_name)
        const stripped_sender_email = striptags(sender_email)
        const stripped_sender_subject = striptags(sender_subject)
        const stripped_sender_message = striptags(sender_message)

        send_mail(stripped_sender_name, stripped_sender_email, stripped_sender_subject, stripped_sender_message, function(result) {
            if (result === "error") {
                res.send({ response: { status: "failed", content: "Something went wrong with sending the mail!" }})
            } else {
                res.send({ response: { status: "success", content: { sender_name: sender_name }}})
            }
        })
    });
};