import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Planta } from '../../planta/planta';
import { Habitacion } from '../habitacion.interface';
import { HabitacionService } from '../service/habitacion.service';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.css']
})
export class FormHabitacionComponent implements OnInit {

  public habi: Habitacion;

  constructor(private habitacionService:HabitacionService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.activateRoute.params.subscribe(params =>{
      let id = params['id']
      let id_planta = params['id_planta']
      let id_tipo = params['id_tipo']
      if(id==null){
        /* si el no existe id en la url --> guardamos */
        this.habitacionService.create(this.habi)
        .subscribe(data =>{
          Swal.fire({
            icon: 'success',
            title: `Habitación ${data.id_habitacion} creada con éxito`
          })
          this.router.navigate(['/']);
        },error => console.log(error));
      }else{
        /* caso contrario actualizamos el registro */
        this.habitacionService.update(id,id_planta,id_tipo, this.habi)
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

}
