import { Injectable } from '@angular/core'
import { Docente } from './docente.model'

@Injectable()
export class DocenteServicio{
    getIdsDocentes(): Docente[] {
        return   [
                    { 
                        id: 11, 
                        nombre: 'Mr. Nice',
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
                    { id: 12, nombre: 'Marco' },
                    { id: 13, nombre: 'Bombasto' },
                    { id: 14, nombre: 'Celeritas' },
                    { id: 15, nombre: 'Magneta' },
                    { id: 16, nombre: 'RubberMan' },
                    { id: 17, nombre: 'Dynama' },
                    { id: 18, nombre: 'Dr IQ' },
                    { id: 19, nombre: 'Magma' },
                    { id: 20, nombre: 'Tornado' }
                ];
    }
}