import { Component, OnInit } from '@angular/core';
import { Habitacion } from '../../habitacion/habitacion.interface';
import { HabitacionService } from '../../habitacion/service/habitacion.service';

@Component({
  selector: 'app-habitaciones-to-sell',
  templateUrl: './habitaciones-to-sell.component.html',
  styleUrls: ['./habitaciones-to-sell.component.css']
})
export class HabitacionesToSellComponent implements OnInit {

  habitaciones: Habitacion[] = [];

  constructor(private habitacionService:HabitacionService) { }

  ngOnInit(): void {
    this.cargarHabitaciones();
  }

  cargarHabitaciones():void{
    let estado = "Ocupada";
    this.habitacionService.getHabitacionByEstado(estado)
    .subscribe( data=> {
      this.habitaciones = data;
    })

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



}
