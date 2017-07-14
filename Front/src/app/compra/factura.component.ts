import { Component } from '@angular/core';
import { CarroCompras } from '../servicios/carrito';
import { Router } from '@angular/router';

@Component({
    selector:'factura-component',
    templateUrl: './factura.component.html'
})

export class FacturaComponent{


    public constructor(private carro:CarroCompras, private router:Router){
        
    }

    ngOnInit(){
        if (this.carro.data.totalHoras == undefined){
            this.router.navigate(['./']);
        }
    }
}