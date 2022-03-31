import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaPlantasComponent } from './laminates/planta/lista-plantas/lista-plantas.component';
import { ListaTiposComponent } from './laminates/tipoHb/lista-tipos/lista-tipos.component';
import { ListaHabitacionesComponent } from './laminates/habitacion/lista-habitaciones/lista-habitaciones.component';
import { DetalleHabitacionComponent } from './laminates/habitacion/detalle-habitacion/detalle-habitacion.component';
import { FormComponent } from './laminates/habitacion/form/form.component';


import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './laminates/shared/header/header.component';
import { FormTipoComponent } from './laminates/tipoHb/form-tipo/form-tipo.component';
import { FormPlantaComponent } from './laminates/planta/form-planta/form-planta.component';
import { SideBarComponent } from './laminates/shared/side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPlantasComponent,
    ListaTiposComponent,
    ListaHabitacionesComponent,
    DetalleHabitacionComponent,
    FormComponent,
    HeaderComponent,
    FormTipoComponent,
    FormPlantaComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
