var express = require('express');
const { route } = require('.');
const { param } = require('.');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let dsDescricao = "Seja bem vindo ao nosso site feito em Express"
  
  res.render('index', { title: 'Express' });
});

router.get("/home", function(req, res, next){
  let dsDescricao = "  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quod consequuntur sint sit? Tempore eveniet, sequi laborum, eius voluptate cumque voluptates architecto, quidem maiores ipsum illo. Numquam exercitationem eos debitis."

  res.render("index", {title: "Home", descripion: dsDescricao})
})

router.get("/produto/:dsProduto?", function(req, res, next){
  let dsDescricao = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas quod consequuntur sint sit? Tempore eveniet, sequi laborum, eius voluptate cumque voluptates architecto, quidem maiores ipsum illo. Numquam exercitationem eos debitis."
  let dsProduto = req.params.dsProduto;
  res.render("produto", {title: dsProduto, descripion: dsDescricao})
})

module.exports = router;
