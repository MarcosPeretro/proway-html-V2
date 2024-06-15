var http = require("http");
const dsCabecalho = "<p><a href='/home'>Home</a> | <a href='/contato'>Contato</a></p>";

var server = http.createServer(function(req, res){
  

        if (req.url == "/" || req.url == "/home") {
            res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
            res.write(dsCabecalho + "<h1>Contato</h1> <p>Lorem ipsum, dolor sit amet co</p>");
        }
        else if (req.url == "/contato") {
            res.writeHead(200, {"content-type": "text/html; charset=utf-8"});
            res.write(dsCabecalho +"<h1>Contato</h1> <p>Lorem ipsum, dolor sit amet co</p>");
        }
        else{
            res.writeHead(404, {"content-type": "text/html; charset=utf-8"});
            res.write(dsCabecalho + "<h1>Pagina não encontrada</h1>");
        }
        res.write(dsCabecalho + "<h1>Contato</h1> <p>Lorem ipsum, dolor sit amet co</p>");

        res.end();
});

server.listen(3005);
console.log("Executando em https://localhost:3005/");