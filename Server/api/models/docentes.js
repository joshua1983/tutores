var mysql = require('mysql');

connection = mysql.createConnection({
  host: 'synergybd.chwhmxxvm3pt.us-west-2.rds.amazonaws.com',
  user: 'synergy',
  password: 'kgh5bvoc',
  database: 'yesynergy'
});
var docenteModel = {};
var dataDocente = {};
var docentes = [];

docenteModel.getDocentes = function (callback){
  if (connection){
    connection.query('select usuidentificador id, nombres nombre from usuarios where usutipo = 2', function(error, rows){
      if (error){
        throw error;
      }else{
        for (var i=0; i< rows.length; i++){
          dataDocente = {};
          dataDocente.id = rows[i].id;
          dataDocente.nombre = rows[i].nombre;
          dataDocente.horario= {
                            lunes:[2,4],
                            martes:[3,5],
                            miercoles:[4,6],
                            jueves:[4,6],
                            viernes:[4,6],
                            sabado:[2,3,4,5],
                            domingo:[2,3,4,5]
                        };
          dataDocente.niveles=['A1', 'A1.2'];
          docentes.push(dataDocente);
        }
        callback(null,docentes);
      }
    })
  }
}

docenteModel.addCitaDocente = function (datos, callback){
  if (connection){
    var id_docente = datos.docente;
    var total_horas = datos.totalHoras;
    var horas = datos.horas;

    var sql_insert = "insert into horarios (id_docente, id_estudiante, fecha_registro, nombre_ext, correo_ext, horas) values(?,?,now(),?, ?,?)";
    connection.query(sql_insert, [id_docente, 1,'josue', 'josue.barrios@gmail.com', total_horas], function(err, result){
      if (err){
        throw err;
        callback(err, -1);
      }else{
        //console.log(result.insertId);
        /*
        Registrar las horas y dias reservados
        */
        var errDetalle = undefined;

        if (horas.length > 0){
          for (var i=0; i<horas.length; i++){

            var objHora = horas[i];
            console.log(objHora);
            var sql_insert_hora = "insert into detalle_horarios(id_horario, hora, dia_semana) values (?,?,?)";
            connection.query(sql_insert_hora, [result.insertId, objHora.hora, objHora.dia], function(err1, result1){
              if (err1){

                errDetalle = err1;
                i=total_horas.length;
              }
            });

          }
          if (errDetalle){
            console.log(err1);
            callback(null, -2);
          }else{
            callback(null, result.insertId);
          }

        }

      }
    });

  }
}

module.exports = docenteModel;
