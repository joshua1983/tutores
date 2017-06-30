import { Injectable } from '@angular/core'
import { Docente } from './docente.model'

@Injectable()
export class DocenteServicio{
    
    getIdsDocentes(): Promise<Array<Docente>> {
        var docentes=   [
                    { 
                        id: 11, 
                        nombre: 'Docente1',
                        horario: {
                            lunes:[2,4],
                            martes:[3,5],
                            miercoles:[4,6],
                            jueves:[4,6],
                            viernes:[4,6],
                            sabado:[2,3,4,5],
                            domingo:[2,3,4,5]
                        },
                        niveles:[
                            'A1', 'A1.2'
                        ]
                    },
                    { id: 12, nombre: 'Docente2' },
                    { id: 13, nombre: 'Docente3' },
                    { id: 14, nombre: 'Docente4' }                    
                ];
        return Promise.resolve(docentes);
    }
}