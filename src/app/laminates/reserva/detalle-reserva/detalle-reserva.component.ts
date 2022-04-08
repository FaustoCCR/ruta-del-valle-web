import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Habitacion } from '../../habitacion/habitacion.interface';
import { HabitacionService } from '../../habitacion/service/habitacion.service';
import { Reserva } from '../reserva';
import { ReservaService } from '../service/reserva.service';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.css']
})
export class DetalleReservaComponent implements OnInit {

  reserva: Reserva = Object();

  habitacion: Habitacion = Object();
  
  num:number;

  constructor(private reservaService:ReservaService,
    private activaRoute:ActivatedRoute,
    private habitacionService:HabitacionService) { }

  ngOnInit(): void {
    this.cargarHabitacion();
    
  }
  cargarDetalleReserva(): void{

    this.activaRoute.params.subscribe(params =>{

      this.num= params['num']
      if (this.num) {
        this.reservaService.obtenerDetalleReservaPorHabitacion(this.num)
        .subscribe((reserva) => this.reserva = reserva);
        
      }
    })
    
  }

  cargarHabitacion():void{

    this.activaRoute.params.subscribe(params =>{
      this.num=params['num']
      if (this.num) {
        this.habitacionService.getHabitacionPorNumero(this.num)
        .subscribe((habitacion) => {
          this.habitacion = habitacion;
          if (!(this.habitacion.estado == 'Disponible')) {
            this.cargarDetalleReserva();
          }
        }
        
        )}
    })

  }


}


