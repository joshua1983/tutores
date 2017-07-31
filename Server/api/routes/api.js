var express = require('express');
var docenteModel = require('../models/docentes');
var router = express.Router();
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

/* GET docentes. */
router.get('/docentes/getDocentesHorarios', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
  docenteModel.getDocentes(function(error, data){
    res.status(200).json(data);
  })
});

router.options('/docentes/addDocenteHorario', upload.array(), function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.status(200);
});


router.post('/docentes/addDocenteHorario', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  docenteModel.addCitaDocente(req,res, function(error,data){
    res.status(200).json(data);
  })
});



module.exports = router;
