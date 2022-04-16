import { Component, OnInit } from '@angular/core';
import { Pago } from '../pago';
import { PagoService } from '../services/pago.service';

@Component({
  selector: 'app-lista-pagos',
  templateUrl: './lista-pagos.component.html',
  styleUrls: ['./lista-pagos.component.css']
})
export class ListaPagosComponent implements OnInit {

  pagos:Pago[] = [];

  constructor(private pagoService:PagoService) { }

  ngOnInit(): void {
    this.listarPagos();
  }

  listarPagos(){

    this.pagoService.obtenerPagos()
    .subscribe(data =>{

      this.pagos = data;
    })

  }

}
