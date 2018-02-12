var express = require("express");
var app = express();

app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/:name", function(req, res){
  var name = req.params.name;
  res.render("home.ejs", {pname: name});
});

app.get("/dogs", function(req, res){
  res.send("Meow");
});

app.listen(3000, function(){
  console.log("Server started at 3000");
});
