import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ConsumoService } from './consumo.service';
import { Consumo } from './consumo';

@Component({
  selector: 'app-consumo',
  templateUrl: './consumo.component.html',
  styleUrls: ['./consumo.component.css']
})
export class ConsumoComponent implements OnInit {

  consumo: Consumo[]= [];

  constructor(private consumoService: ConsumoService) { }

  ngOnInit(): void {
    this.cargarConsumo();
    
  }

  cargarConsumo(): void{
    this.consumoService.getConsumo()
    .subscribe( data => {
      this.consumo = data;
    })
  }

  eliminar(id:number){
    this.consumoService.delete(id)
    .subscribe(() =>{
      Swal.fire({
        icon: 'success',
        title: 'Eliminado'
      })

      this.cargarConsumo();
    });
  }
}
