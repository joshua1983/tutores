import { Component, Input } from '@angular/core';
import { Docente } from '../servicios/docente.model'

@Component({
  selector: 'docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {
    @Input()
    docente: Docente;

}
