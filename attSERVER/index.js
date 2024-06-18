var express = require("express")
var app = express();
const dsCabecalho = "<p><a href='/home'>Home</a> | <a href='/form'>Formulário</a></p>";

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send(dsCabecalho + "<h1>Home</h1> <p>Express Expresso no seu presso</p>")
});

app.get("/home", function(req,res){
    res.send(dsCabecalho + "<h1>Home</h1> <p>Express Expresso no seu presso</p>")
})
app.get("/form", function(req,res){
    res.render('../views/formulario');
})

app.get('/formAction', function(req, res){
    let dsNome = req.query ["nome"]
    let dsCPF = req.query ["cpf"]
    let dsEmail = req.query ["email"]
    let dsTelefone = req.query["telefone"]
    let dsResultado = dsCabecalho + "<h1></h1>";

    if (dsNome == "") {
        dsNome = "Não inserido"
    }
    if (dsCPF == "") {
        dsCPF = "Não inserido"
    }
    if (dsEmail == "") {
        dsEmail = "Não inserido"
    }
    if (dsTelefone == "") {
        dsTelefone ="Não inserido"
    }
    dsResultado = ` <a href="/home">Home</a>
                    <p>Nome:  ${dsNome}</p>
                    <p>CPF:   ${dsCPF} </p>
                    <p>Email: ${dsEmail} </p>
                    <p>Telefone: ${dsTelefone} </p>`
    res.send(dsResultado)
})

app.listen(3007, function(req,res){
    console.log("servidor on :  http://localhost:3007/");
});
