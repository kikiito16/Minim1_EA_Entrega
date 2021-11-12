import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModificarComponent } from './modificar/modificar.component';
import { NuevoVacunadoComponent } from './nuevovacunado/nuevovacunado.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/principal' },
  { path: 'principal', component: PrincipalComponent},
  { path: 'nuevovacunado', component: NuevoVacunadoComponent},
  { path: ':id', component: ModificarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
