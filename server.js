var bodyParser = require('body-parser');
var cors = require('cors')
var express = require('express'),
    app = express(),
    routes = require("./api/routes/AppRoutes")
port = process.env.PORT || 8070;

app.use(bodyParser.json())
app.use(cors())
routes(app)
app.listen(port);

console.log('RESTful API server started on: ' + port);
