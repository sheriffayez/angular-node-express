var express = require ("express");
var app = express();
var pg = require("pg");
var contactRoutes = require("./contact-routes.js");
var bodyParser = require("body-parser");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.use("/", contactRoutes);
// app.use("/",listRoutes);
var server = app.listen(8080, function (req, res){


	console.log("server is up and running");
});