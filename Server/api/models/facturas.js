var mysql = require('mysql');

connection = mysql.createConnection({
  host: 'synergybd.chwhmxxvm3pt.us-west-2.rds.amazonaws.com',
  user: 'synergy',
  password: 'kgh5bvoc',
  database: 'yesynergy'
});

var facturaModel = {};
var dataFactura = {};

facturaModel.getFactura(id, callback){
  if (connection){
    connection.query('select id_docente, id_estudiante, fecha_registro, nombre_ext, correo_ext, horas from horarios where id=?',[id], function(err, results){
      
    });

  }
}
