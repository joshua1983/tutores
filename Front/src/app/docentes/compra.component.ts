import { Component, Input } from '@angular/core';
import { Docente } from '../servicios/docente.model'

@Component({
  selector: 'compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent {
    @Input()
    docente: Docente;
    horasCompra: number;

    comprarHoras():void{
        alert("comprar "+ this.horasCompra);
    }

}
