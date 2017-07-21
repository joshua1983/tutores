import { Component, Input } from '@angular/core';
import { Docente } from '../servicios/docente.model'
import { Hora } from '../servicios/hora.model'
import { CompraServicioWrapper } from '../servicios/compraWrapper.servicio' 

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
    @Input()
    calendario: Docente;
    hora:Hora;

    constructor(private servicioCompraWrapper:CompraServicioWrapper){}

    agregarHora(_hora:number, _dia:string, event){
      if (event.target.className != 'nodisponible'){
        this.hora = new Hora();
        this.hora.dia = _dia;
        this.hora.hora = _hora;
        this.servicioCompraWrapper.addHoraCanastaDocente(this.hora);
        event.target.className='nodisponible';
        
      }else{
        
      }
      
    }

    horaDisponible(hora: number, horario:number[]): string{
      let clase = "";
      if (horario.indexOf(hora) >= 0){
        clase = "disponible";
      }else{
        clase = "nodisponible";
      }
      return clase;
    }

}