var express = require("express");
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res){
   res.send("Hi there!") ;
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

// "/" => "Hi there!"
app.get("/dog", function(req, res){
    console.log("Someone made a resquest to /dog");
    res.send("MEOW!");
});

app.get("/*", function(req, res){
    res.send("You're a star!");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server started");
});

