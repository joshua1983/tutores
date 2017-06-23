import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { DocenteComponent } from './docentes/docente.component';
import { CalendarioComponent } from './docentes/calendario.component'
import { CompraComponent } from './docentes/compra.component'

@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent,
    CalendarioComponent,
    CompraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
