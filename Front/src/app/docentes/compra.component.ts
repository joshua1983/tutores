import { Component, Input, OnInit } from '@angular/core';
import { Docente } from '../servicios/docente.model';
import { Hora } from '../servicios/hora.model';
import { CompraServicio } from '../servicios/compra.servicio'
import { CompraServicioWrapper } from '../servicios/compraWrapper.servicio' 
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
    @Input()
    docente: Docente;
    horasCompra: number =0;
    horasSeleccionadas:Array<Hora>;
    subscription: Subscription;

    constructor(private compraServicio:CompraServicio, private compraEvents:CompraServicioWrapper){

    }

    ngOnInit(){
        this.subscription = this.compraEvents.addHoraCanastaDocente$.subscribe(
            hora =>{
                this.horasCompra += 1;
                //this.horasSeleccionadas.push(hora);
            }
        )
    }

    comprarHoras():void{
        alert("comprar "+ this.horasCompra);
    }

}
