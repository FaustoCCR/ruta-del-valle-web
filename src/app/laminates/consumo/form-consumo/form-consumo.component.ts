import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Consumo } from '../consumo-producto/consumo';
import { ConsumoService } from '../consumo-producto/consumo.service';


@Component({
  selector: 'app-form-consumo',
  templateUrl: './form-consumo.component.html',
  styleUrls: ['./form-consumo.component.css']
})
export class FormConsumoComponent implements OnInit {

  consumo: Consumo=new Consumo();
  constructor(private consumoService:ConsumoService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

  }
  onCreate():void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id==null){
        /* si el no existe id en la url --> guardamos */
        this.consumoService.create(this.consumo)
        .subscribe(data =>{
          Swal.fire({
            icon: 'success',
            title: `${data.id_consumo}, creada con éxito`
          })
          this.router.navigate(['/productos']);
        },error => console.log(error));
      }/*else{
        /* caso contrario actualizamos el registro *//*
        this.consumoService.update(id,this.consumo)
        .subscribe(() =>{
          Swal.fire({
            icon: 'success',
            title: `Registro actualizado`
          })
          this.router.navigate(['/plantas']);
        }
      }*/

    })

 }
}
