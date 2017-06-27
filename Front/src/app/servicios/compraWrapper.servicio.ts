import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Hora } from '../servicios/hora.model'

@Injectable()
export class CompraServicioWrapper{
    private addHoraCanasta = new Subject<Hora>();
    addHoraCanastaDocente$ = this.addHoraCanasta.asObservable();

    addHoraCanastaDocente(hora:Hora){
        this.addHoraCanasta.next(hora);
    }

}