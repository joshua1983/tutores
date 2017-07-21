import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DocenteComponent } from './docentes/docente.component';
import { CalendarioComponent } from './docentes/calendario.component';
import { CompraComponent } from './docentes/compra.component';
import { Configuracion } from './servicios/configuracion';

import { RouterModule, Routes } from '@angular/router';

import { APPROUTER } from './commons/route';
import { PageNotFoundComponent } from './commons/PageNotFound';
import { InitComponent } from './init.component';

import { FacturaComponent } from './compra/factura.component';
import { CarroCompras } from './servicios/carrito';

@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent,
    CalendarioComponent,
    CompraComponent,
    PageNotFoundComponent,
    InitComponent,
    FacturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule,
    RouterModule.forRoot(APPROUTER)
  ],
  providers: [ CarroCompras, Configuracion ],
  bootstrap: [ InitComponent ]
})
export class AppModule { }
