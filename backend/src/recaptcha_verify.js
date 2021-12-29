// REQUIRES //
const bodyParser = require('body-parser');
const fetch = require('isomorphic-fetch');

module.exports = function(app) {
    // CORS //
    app.use(bodyParser.json());
    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    // MAIN //
    app.post("/api/validate_recaptcha_v3", (req, res) => {
        const secret = process.env.REACT_APP_RECAPTCHA_SECRET_KEY;
        const token = req.body.token;
        const url = `${process.env.REACT_APP_RECAPTCHA_URL}?secret=${secret}&response=${token}`;

        fetch(url, {
            method: 'post'
        })
            .then(response => response.json())
            .then(google_response => {
                if (google_response.success == true) {
                    if (google_response.score >= 0.7) {
                        return res.send({ response: "success" });
                    } else {
                        return res.send({ response: "failed" });
                    }
                } else {
                    return res.send({ response: "failed" });
            }})
            .catch(error => res.json({ error }));
    });
};