import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../habitacion.interface';
import { HabitacionService } from '../service/habitacion.service';

@Component({
  selector: 'app-lista-habitaciones',
  templateUrl: './lista-habitaciones.component.html',
  styleUrls: ['./lista-habitaciones.component.css']
})
export class ListaHabitacionesComponent implements OnInit {

  habitaciones: Habitacion[] = [];

  constructor(private habitacionService: HabitacionService) { }

  ngOnInit(): void {
    this.cargarHabitaciones();
  }

  cargarHabitaciones(): void{
    this.habitacionService.getHabitaciones()
    .subscribe( data => {

      this.habitaciones = data;
    });
  }

}
