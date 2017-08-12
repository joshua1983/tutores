import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector:'factura-component',
    templateUrl: './factura.component.html'
})

export class FacturaComponent{

    id:string;
    paramSub:any;

    public constructor(
        private router: Router,
        private route: ActivatedRoute){
        
    }

    ngOnInit(){
        this.paramSub = this.route
            .params
            .subscribe(params => {
                console.log(params);
                this.id = params["id"].toString();
            });
        
            
    }

    ngOnDestroy(){
        this.paramSub.unsubscribe();
    }
}