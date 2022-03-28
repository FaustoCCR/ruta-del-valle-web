import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaHabitacionesComponent } from './laminates/habitacion/lista-habitaciones/lista-habitaciones.component';
import { FormTipoComponent } from './laminates/tipoHb/form-tipo/form-tipo.component';
import { ListaTiposComponent } from './laminates/tipoHb/lista-tipos/lista-tipos.component';

const routes: Routes = [
  {path: '', component: ListaTiposComponent},
  {path: 'habitaciones', component: ListaHabitacionesComponent},
  {path: 'tipoHb/form', component: FormTipoComponent},
  {path: '**', redirectTo: '',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
