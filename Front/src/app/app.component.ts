import { Component, OnInit } from '@angular/core';
import { DocenteServicio } from './servicios/docente.servicio'
import { CompraServicio } from './servicios/compra.servicio'
import { CompraServicioWrapper } from './servicios/compraWrapper.servicio'
import { Docente } from './servicios/docente.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DocenteServicio, CompraServicio, CompraServicioWrapper]
})
export class AppComponent implements OnInit {
  docentes:Docente[];
  
  ngOnInit(): void{
    this.getDocentes();
  }

  constructor(private docenteServicio: DocenteServicio){
  }

  getDocentes(){
    this.docentes = this.docenteServicio.getIdsDocentes();
  }

}
