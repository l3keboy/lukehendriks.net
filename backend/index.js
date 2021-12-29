// REQUIRES //
const express = require("express");
const bodyParser = require('body-parser');
require("dotenv").config();

// CONSTANTS //
const PORT = process.env.PORT || 3001;
const app = express()

// ENDPOINTS //
require("./src/recaptcha_verify.js")(app);
require("./src/contact_mail.js")(app);

// CORS //
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// MAIN //
app.get("/api", (req, res) => {
    res.json({message: "lukehendriks.net API endpoint"})
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});