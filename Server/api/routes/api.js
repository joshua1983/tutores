var express = require('express');
var docenteModel = require('../models/docentes');
var router = express.Router();

/* GET docentes. */
router.get('/docentes/getDocentesHorarios', function(req, res, next) {
  docenteModel.getDocentes(function(error, data){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.status(200).json(data);
  })
});

module.exports = router;
