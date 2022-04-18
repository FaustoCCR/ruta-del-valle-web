import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
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

  getColorBody(estado:string): string{

    let color:string = '';
    switch (estado){
      case 'Ocupada':
        color ='#e5663b';
        break;
      case 'Disponible':
        color = '#007c5d';
        break;
      case 'Reservada':
        color = '#3780b9';
        break;
    }
    return color;
  }

  getColorFooter(estado:string): string{

    let color:string = '';
    switch (estado){
      case 'Ocupada':
        color ='#d15d37';
        break;
      case 'Disponible':
        color = '#007155';
        break;
      case 'Reservada':
        color = '#2f6f9e';
        break;
    }
    return color;
  }

  eliminar(id:number){
    this.habitacionService.delete(id)
    .subscribe(() =>{
      Swal.fire({
        icon: 'success',
        title: 'Eliminado'
      })

      this.cargarHabitaciones();
    });
  }

}
