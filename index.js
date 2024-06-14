var express = require("express")
var app = express();
const dsCabecalho = "<p><a href='/home'>Home</a> | <a href='/contato'>Contato</a></p>" ;

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send(dsCabecalho + "<h1>Home</h1> <p>Express Expresso no seu presso</p>")
});

app.get("/home", function(req,res){
    res.send(dsCabecalho + "<h1>Home</h1> <p>Express Expresso no seu presso</p>")
});

app.get("/contato", function(req,res){
    res.render("../views/contato")
});

app.listen(3000, function(req,res){
    console.log("servidor on :  http://localhost:3000/")
});
