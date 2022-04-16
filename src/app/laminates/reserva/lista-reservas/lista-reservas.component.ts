import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Pago } from '../../pago/pago';
import { PagoService } from '../../pago/services/pago.service';
import { Reserva } from '../reserva';
import { ReservaService } from '../service/reserva.service';

@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent implements OnInit {

  pago:Pago = new Pago();

  reservas: Reserva[] = [];

  constructor(private reservaService: ReservaService,
    private pagoService:PagoService,
    private router:Router) { }

  ngOnInit(): void {

    this.cargarReservas();
  }


  cargarReservas(): void{

    this.reservaService.getReservas()
    .subscribe( reserva => {
      this.reservas = reserva;
    });
  }


  showaList(description:string):string[]{

    let text = description.split("-");
    return text;
  }

  onClickPay(id_reserva:number){
    Swal.fire({
      title: '¿Deseas realizar el pago de esta reserva?',
      showCancelButton: true,
      confirmButtonText: 'Si',
      cancelButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.realizarPago(id_reserva);
        
      } 
    })
  }

  realizarPago(id_reserva:number){
    this.pago.id_reserva = id_reserva;
    this.pagoService.crearPago(this.pago)
    .subscribe( () =>{
      this.router.navigate(['/pagos']);
      Swal.fire('Pago Realizado', '', 'success')
    }, err =>{
      Swal.fire({
        icon: 'error',
        title: JSON.stringify(` ${err.error.mensaje}`)
      })
    })
  }

}