import { Injectable } from '@angular/core';
import { Docente } from './docente.model';
import { Configuracion } from './configuracion';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CompraServicio{
    
    private actionUrl: string;
    private headers: Headers;

    constructor(private _configuracion: Configuracion,
                private _http: Http){
        this.actionUrl = _configuracion.Server + "addDocenteHorario";
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    guardarCotizacion(_datosCompra:any): Observable<string>{
        let datos = JSON.stringify(_datosCompra);
        return this._http.post(this.actionUrl,datos, {headers:this.headers})
                         .map((response:Response) => <string>response.json())
                         .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}