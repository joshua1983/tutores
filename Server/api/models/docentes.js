var mysql = require('mysql');

connection = mysql.createConnection({
  host: 'synergybd.chwhmxxvm3pt.us-west-2.rds.amazonaws.com',
  user: 'synergy',
  password: 'kgh5bvoc',
  database: 'yesynergy'
});
var docenteModel = {}

docenteModel.getDocentes = function (callback){
  if (connection){
    connection.query('select usuidentificador id, nombres nombre from usuarios where usutipo = 2', function(error, rows){
      if (error){
        throw error;
      }else{
        
        callback(null,rows);
      }
    })
  }
}

module.exports = docenteModel;
