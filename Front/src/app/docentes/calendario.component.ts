import { Component, Input } from '@angular/core';
import { Docente } from '../servicios/docente.model'

@Component({
  selector: 'calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent {
    @Input()
    calendario: Docente;

    horaDisponible(hora: number, horario:number[]): string{
      let clase = "";
      if (horario.indexOf(hora) > 0){
        clase = "disponible";
      }else{
        clase = "nodisponible";
      }
      return clase;
    }

}