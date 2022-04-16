import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Habitacion } from '../../habitacion/habitacion.interface';
import { HabitacionService } from '../../habitacion/service/habitacion.service';
import { UsuarioService } from '../../usuario/service/usuario.service';
import { Reserva } from '../reserva';
import { ReservaService } from '../service/reserva.service';

@Component({
  selector: 'app-detalle-reserva',
  templateUrl: './detalle-reserva.component.html',
  styleUrls: ['./detalle-reserva.component.css']
})
export class DetalleReservaComponent implements OnInit {

  reserva: Reserva = new Reserva();

  estadosReserva:string[] = ["Reservada","Hospedado","Consumido"];

  habitacion: Habitacion = Object();
  
  num:number;

  estadoHb:string = "";

  constructor(private reservaService:ReservaService,
    private activaRoute:ActivatedRoute,
    private habitacionService:HabitacionService,
    private router: Router,
    private usuarioService:UsuarioService) { }

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
          this.estadoHb = habitacion.estado;
          if (this.habitacion.estado == 'Ocupada' || this.habitacion.estado == 'Reservada') {
            this.cargarDetalleReserva();
          }else{
            
            this.reserva.adultos = 1;
            this.reserva.ninos = 0;
            /**
             * Carga Fechas en el caso de no tenerlas 
             */
            this.reserva.fecha_reserva = this.formatDate(new Date());
            /*this.reserva.fecha_ingreso = new Date();
            this.reserva.fecha_salida = new Date(); */
          }
        }
        
        )}
    })

  }

  formatDate(date:Date):string{

  let month;

  if (date.getMonth()<10) {

    month = "0"+ (date.getMonth()+1)
  }else{
    month = date.getMonth();
  }

  let formatted_date = date.getFullYear() + "-" + month + "-" + date.getDate();


  return formatted_date;
  }

  crearReserva(){
    
    this.reserva.id_habitacion = this.habitacion.id_habitacion;
    this.reserva.cliente = this.reserva.dni;

    if (this.reserva.cliente!=null) {
      if (this.reserva.adultos<=this.habitacion.max_adultos && this.reserva.ninos<=this.habitacion.max_ninos)  {
        this.reservaService.createReservaByDni(this.reserva)
        .subscribe(() =>{
          Swal.fire({
            icon: 'success',
            title: `Reserva creada con éxito`
          })
          this.router.navigate(['/habitaciones']);
        }, err =>{
          Swal.fire({
            icon: 'error',
            title: JSON.stringify(`${err.error.mensaje}`)
          })
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: `Número de personas no permitido`
        })
      }
    }else{
      Swal.fire({
        icon: 'error',
        title: `Cliente no identificado`
      })
    }
    
  }

  actualizarReserva(){

    this.reserva.cliente = this.reserva.dni;
    this.reserva.id_habitacion = this.habitacion.id_habitacion;

    if (this.reserva.cliente!=null) {
      if (this.reserva.adultos<=this.habitacion.max_adultos && this.reserva.ninos<=this.habitacion.max_ninos)  {

        this.reservaService.updateReserva(this.reserva.id_reserva,this.reserva)
        .subscribe(() =>{
          Swal.fire({
            icon: 'success',
            title: `Reserva actualizada con éxito`
          })
          this.router.navigate(['/habitaciones']);
        }, err =>{
          Swal.fire({
            icon: 'error',
            title: JSON.stringify(` ${err.error.mensaje}`)
          })
        })
      }else{
        Swal.fire({
          icon: 'error',
          title: `Número de personas no permitido`
        })
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: `Cliente no identificado`
      })
    }



  }



  OnEdit(){
    if (this.estadoHb == 'Disponible') {

      this.crearReserva();
      
    }else{
      this.actualizarReserva();
    }
  }


  restarFechas(fecha_ingreso:string, fecha_salida:string): number{

    var day2 = new Date(fecha_salida).getTime();
    var day1 = new Date(fecha_ingreso).getTime();
    var difference= Math.abs(day2-day1);
    var days = difference/(1000 * 3600 * 24)
    return days; 
  }

  calcularCostoAlojamiento(){

    let costoNoche = this.habitacion.costo_noche;

    let duracionEstancia = this.restarFechas(this.reserva.fecha_ingreso,this.reserva.fecha_salida);

    let costo_alojamiento = costoNoche * duracionEstancia;

    this.reserva.costo_alojamiento = costo_alojamiento;
  }


  showClienteByDni(){

    this.usuarioService.obtenerUsuarioByDni(this.reserva.dni)
    .subscribe(data => {

      this.reserva.cliente = data.nombre;
    }, err =>{
      this.reserva.cliente = '';
    })


  }




}


