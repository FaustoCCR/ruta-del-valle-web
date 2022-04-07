import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPlantasComponent } from './laminates/planta/lista-plantas/lista-plantas.component';
import { ListaTiposComponent } from './laminates/tipoHb/lista-tipos/lista-tipos.component';
import { ListaHabitacionesComponent } from './laminates/habitacion/lista-habitaciones/lista-habitaciones.component';
import { DetalleHabitacionComponent } from './laminates/habitacion/detalle-habitacion/detalle-habitacion.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './laminates/shared/header/header.component';
import { FormTipoComponent } from './laminates/tipoHb/form-tipo/form-tipo.component';
import { FormPlantaComponent } from './laminates/planta/form-planta/form-planta.component';
import { SideBarComponent } from './laminates/shared/side-bar/side-bar.component';
import { LoginComponent } from './laminates/auth/login/login.component';
import { RegistroComponent } from './laminates/auth/registro/registro.component';
import { IndexComponent } from './laminates/index/index.component';
import { plantaInterceptorProvider } from './interceptors/planta-interceptor.service';
import { UsersComponent } from './laminates/usuario/users/users.component';
import { FormUserComponent } from './laminates/usuario/form-user/form-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlantasComponent,
    ListaTiposComponent,
    ListaHabitacionesComponent,
    DetalleHabitacionComponent,
    HeaderComponent,
    FormTipoComponent,
    FormPlantaComponent,
    SideBarComponent,
    LoginComponent,
    RegistroComponent,
    IndexComponent,
    UsersComponent,
    FormUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [plantaInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
