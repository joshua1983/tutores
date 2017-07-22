import { Component, OnInit } from '@angular/core';
import { DocenteServicio } from './servicios/docente.servicio'
import { CompraServicio } from './servicios/compra.servicio'
import { CompraServicioWrapper } from './servicios/compraWrapper.servicio'
import { Docente } from './servicios/docente.model'



@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DocenteServicio, CompraServicio, CompraServicioWrapper]
})
export class AppComponent implements OnInit {
  docentes:Docente[];
  
  ngOnInit(): void{
    this.getTodosDocentes();
  }

  constructor(private docenteServicio: DocenteServicio){
     //docenteServicio.getIdsDocentes().then(docentes => this.docentes = docentes);
  }

  private getTodosDocentes(){
    this.docenteServicio
        .getDocentes()
        .subscribe((data: Docente[]) => this.docentes = data,
                  error => console.log(error),
                () => console.log("cargado docentes"));
  }


}
