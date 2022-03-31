import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { TipohbService } from '../service/tipohb.service';
import { Tipohb } from '../tipohb';

@Component({
  selector: 'app-form-tipo',
  templateUrl: './form-tipo.component.html',
  styleUrls: ['./form-tipo.component.css']
})
export class FormTipoComponent implements OnInit {

  public tipo: Tipohb = new Tipohb();

  constructor(private tipoHbService:TipohbService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.cargarPlanta();
  }

  onCreate():void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id==null){
        /* si el no existe id en la url --> guardamos */
        this.tipoHbService.create(this.tipo)
        .subscribe(data =>{
          Swal.fire({
            icon: 'success',
            title: `Tipo de Habitación ${data.nombre} creada con éxito`
          })
          this.router.navigate(['/']);
        },error => console.log(error));
      }else{
        /* caso contrario actualizamos el registro */
        this.tipoHbService.update(id,this.tipo)
        .subscribe(() =>{
          Swal.fire({
            icon: 'success',
            title: `Registro actualizado`
          })
          this.router.navigate(['/']);
        })
      }

    })
  }

  cargarPlanta(): void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id){
        this.tipoHbService.getTipoHbId(id)
        .subscribe((tipo) => this.tipo = tipo);
      }
    })
  }



}
