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
                            lunes: [8,9,10],
                            martes: [9,10]
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