import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './laminates/auth/login/login.component';
import { RegistroComponent } from './laminates/auth/registro/registro.component';
import { ListaHabitacionesComponent } from './laminates/habitacion/lista-habitaciones/lista-habitaciones.component';
import { IndexComponent } from './laminates/index/index.component';
import { FormPlantaComponent } from './laminates/planta/form-planta/form-planta.component';
import { ListaPlantasComponent } from './laminates/planta/lista-plantas/lista-plantas.component';
import { FormTipoComponent } from './laminates/tipoHb/form-tipo/form-tipo.component';
import { FormHabitacionComponent } from './laminates/habitacion/form-habitacion/form-habitacion.component';
import { ListaTiposComponent } from './laminates/tipoHb/lista-tipos/lista-tipos.component';
import { PlantaGuardService as guard } from './guards/planta-guard.service';
import { UsersComponent } from './laminates/usuario/users/users.component';
import { FormUserComponent } from './laminates/usuario/form-user/form-user.component';
import { DetalleReservaComponent } from './laminates/reserva/detalle-reserva/detalle-reserva.component';
import { HabitacionesToSellComponent } from './laminates/consumo/habitaciones-to-sell/habitaciones-to-sell.component';
import { ProductoComponent } from './laminates/producto/producto/producto.component';
import { FormProductoComponent } from './laminates/producto/form-producto/form-producto.component';
import { ConsumoComponent } from './laminates/consumo/consumo-producto/consumo.component';
import { FormConsumoComponent } from './laminates/consumo/form-consumo/form-consumo.component';
import { ListaReservasComponent } from './laminates/reserva/lista-reservas/lista-reservas.component';
import { ListaPagosComponent } from './laminates/pago/lista-pagos/lista-pagos.component';
import { TableHabitacionesComponent } from './laminates/habitacion/table-habitaciones/table-habitaciones.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'tiposHb', component: ListaTiposComponent},
  {path: 'habitaciones', component: ListaHabitacionesComponent},
  {path: 'tipoHb/form', component: FormTipoComponent},
  {path: 'tipoHb/form/:id', component: FormTipoComponent},
  {path: 'habitacion/form', component: FormHabitacionComponent},
  {path: 'plantas', component: ListaPlantasComponent, canActivate:[guard], data:{expectedRol:['admin','user']}},
  {path: 'planta/form', component: FormPlantaComponent, canActivate:[guard], data:{expectedRol:['admin']}},
  {path: 'planta/form/:id', component: FormPlantaComponent, canActivate:[guard], data:{expectedRol:['admin']}},
  {path: 'productos', component: ProductoComponent, canActivate:[guard], data:{expectedRol:['admin']}},
  {path: 'productos/form', component: FormProductoComponent, canActivate:[guard], data:{expectedRol:['admin']}},
  {path: 'productos/form/:id', component: FormProductoComponent, canActivate:[guard], data:{expectedRol:['admin']}},
  {path: 'consumos', component: ConsumoComponent, canActivate:[guard], data:{expectedRol:['admin']}},
  {path: 'consumos/form', component: FormConsumoComponent, canActivate:[guard], data:{expectedRol:['admin']}},
  {path: 'consumos/form/:id', component: FormConsumoComponent, canActivate:[guard], data:{expectedRol:['admin']}},
  {path: 'users', component: UsersComponent},
  {path: 'registro/:id', component: FormUserComponent},
  {path: 'reserva/detalle/:num', component: DetalleReservaComponent},
  {path: 'habitaciones/consumo', component: HabitacionesToSellComponent},
  {path: 'reservas', component: ListaReservasComponent},
  {path: 'pagos', component: ListaPagosComponent},
  {path: 'habitaciones/tabla', component: TableHabitacionesComponent},
  {path: 'habitacion/form/:id', component: FormHabitacionComponent},
  {path: '**', redirectTo: '',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
