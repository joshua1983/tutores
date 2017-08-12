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

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}