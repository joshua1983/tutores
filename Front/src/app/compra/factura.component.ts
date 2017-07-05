import { Component } from '@angular/core';
import { CarroCompras } from '../servicios/carrito';


@Component({
    selector:'factura-component',
    templateUrl: './factura.component.html'
})

export class FacturaComponent{

    public constructor(private carro:CarroCompras){
        console.log(carro);
    }
}