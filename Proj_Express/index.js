var express = require("express")
var app = express();
const dsCabecalho = "<p><a href='/home'>Home</a> | <a href='/contato'>Contato</a> | <a href='/form'>Formulário</a></p>";

app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.send(dsCabecalho + "<h1>Home</h1> <p>Express Expresso no seu presso</p>")
});

app.get("/home", function(req,res){
    res.send(dsCabecalho + "<h1>Home</h1> <p>Express Expresso no seu presso</p>")
});

app.get("/produto/:produto?", function(req, res){
    let dsProduto = req.params.produto;
    if (dsProduto) {
        res.send(dsCabecalho + `<h1>Produto: ${dsProduto}</h1> <p>Descrição do produto: ${dsProduto}.</p>`);
    }
    res.send(dsCabecalho + `<h1>Produto: ${dsProduto}</h1> <p>Descrição do produto: ${dsProduto}.</p>`);
})
app.get("/form", function(req,res){
    res.render('../views/formulario');
})

app.get('/formAction', function(req, res){
    let dsNome = req.query['dsNome'];
    let dsEmail = req.query['dsEmail'];
    let ieNota = parseInt(req.query['ieNota']);
    let dsTexto = dsCabecalho + "<h1></h1>";
    let ieNotaBoolean = false;
    if (dsNome) {
        dsTexto += `<h2>obrigado, ${dsNome}</h2>`;
    }
    if (dsEmail) {
        dsTexto += `<p>Em caso de dúvida, te responderemos através do seu email ${dsEmail}`;
    }
    if (ieNota > 0) {
        ieNotaBoolean = true;
        switch (ieNota) {
            case 1:
                dsTexto += `<p>Vimos que sua nota foi Ótimo, que bom que gostou!</p>`
                break;
            case 2:
                dsTexto += `<p>Vimos que sua nota foi Muito bom, </p>`
                break;
            case 3:
                dsTexto += `<p>Vimos que sua nota foi Bom, </p>`
                break;
            case 4:
                dsTexto += `<p>Vimos que sua nota foi Precisa melhorar, </p>`
                break;
            default:
                dsTexto += "Não foi encotrado a nota!";
                break;
        }
    }
    if (!(dsNome) && !(dsEmail) && !(ieNotaBoolean)) {
        dsTexto += "<h2>Não foram encontrados dados preenchidos.</h2>"
    }
    res.send(dsTexto)
})

app.get("/cadastro/:dsNome/:nrIdade?", function(req, res){
    let dsNome = req.params.dsNome;
    let nrIdade = req.params.nrIdade;
    if (nrIdade) {
        req.send(dsCabecalho + `<h1>Bem vindo, ${dsNome}</h1> <p>Sua idade é: ${nrIdade}. </p>`);
    }
    else{
        res.send(dsCabecalho + `<h1>Bem vindo, ${dsNome}</h1>`)
    }
    
})

app.get("/contato", function(req,res){
    res.render("../views/contato");
});

app.listen(3000, function(req,res){
    console.log("servidor on :  http://localhost:3000/");
});
