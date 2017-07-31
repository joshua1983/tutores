import { Injectable } from '@angular/core'
import { Docente } from './docente.model'

import { Configuracion } from './configuracion';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class DocenteServicio{

    private docentes_url:string;
    private docentes_add_url:string;

    constructor(private _http: Http, private _configuracion: Configuracion){
        this.docentes_url = _configuracion.Server + 'getDocentesHorarios';
        this.docentes_add_url = _configuracion.Server + 'addDocenteHorario';
    }


    getDocentes(): Observable<Array<Docente>>{
        
        return this._http.get(this.docentes_url)
            .map((response: Response)=>
                <Array<Docente>>response.json())
            .catch(this.handleError);
    }
    
    addCitaDocente(data:any):Observable<string>{
        let datos = JSON.stringify(data);
        return this._http.post(this.docentes_add_url,datos).map((response:Response) => <string>response.json())
        .catch(this.handleError);
    }
    
    getIdsDocentes(): Promise<Array<Docente>> {
        var docentes=   [
                    { 
                        id: 11, 
                        nombre: 'Docente1',
                        apellidos: 'Apellido1',
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

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}