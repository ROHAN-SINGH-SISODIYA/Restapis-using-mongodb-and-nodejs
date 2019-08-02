let express = require('express');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');
let app = express();

let apiRoutes = require("./api-routes/api-routes");
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
var port = process.env.PORT || 808;

app.get('/', (req, res) => res.send('Hello World'));
app.use('/api', apiRoutes);

app.listen(port, function () {
    console.log("Running Restapi on port " + port);
});