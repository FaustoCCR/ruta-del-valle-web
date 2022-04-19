import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Habitacion } from '../habitacion';
import { HabitacionService } from '../service/habitacion.service';

@Component({
  selector: 'app-table-habitaciones',
  templateUrl: './table-habitaciones.component.html',
  styleUrls: ['./table-habitaciones.component.css']
})
export class TableHabitacionesComponent implements OnInit {

  public habi: Habitacion[] = [];

  constructor(private habitacionService:HabitacionService) { }

  ngOnInit(): void {
    this.listarHabitacion();
  }


  listarHabitacion():void{
    this.habitacionService.getHabitaciones().subscribe(dato => { 
      this.habi=dato;
    })
  }

  eliminar(id:number){
    this.habitacionService.delete(id)
    .subscribe(() =>{
      Swal.fire({
        icon: 'success',
        title: 'Eliminado'
      })

      this.listarHabitacion();
    });
  }
}
