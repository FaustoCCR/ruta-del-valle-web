import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TipohbService } from '../service/tipohb.service';
import { Tipohb } from '../tipohb';

@Component({
  selector: 'app-lista-tipos',
  templateUrl: './lista-tipos.component.html',
  styleUrls: ['./lista-tipos.component.css']
})
export class ListaTiposComponent implements OnInit {

  tiposHb: Tipohb[]= [];

  constructor(private tipohbService: TipohbService) { }

  ngOnInit(): void {
    this.cargarTiposHb();
    
  }

  cargarTiposHb(): void{
    this.tipohbService.getTiposHb()
    .subscribe( data => {
      this.tiposHb = data;
    })
  }

  borrar(id:number){
    this.tipohbService.delete(id).subscribe(() =>{
 
      Swal.fire({
        icon: 'success',
        title: 'Eliminado'
      })
    })
  }

}
