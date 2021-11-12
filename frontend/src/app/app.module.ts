import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { DatosVacunadoComponent } from './datos-vacunado/datos-vacunado.component';
import { NuevoVacunadoComponent } from './nuevovacunado/nuevovacunado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    DatosVacunadoComponent,
    NuevoVacunadoComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
