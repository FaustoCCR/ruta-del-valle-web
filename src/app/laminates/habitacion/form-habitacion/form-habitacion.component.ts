import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Habitacion } from '../habitacion';
import { HabitacionService } from '../service/habitacion.service';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.css']
})
export class FormHabitacionComponent implements OnInit {

  public habi: Habitacion = new Habitacion();//error

  constructor(private habitacionService:HabitacionService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.cargarHabi();
  }

  onCreate():void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id==null){
        this.habitacionService.create(this.habi).subscribe(
          response =>{
          Swal.fire({
            icon: 'success',
            title: `Habitación ${response.num_habitacion} creada con éxito`
          })
          this.router.navigate(['/habitaciones/tabla']);
        },error => console.log(error));

      } else {
        this.activateRoute.params.subscribe(params =>{
          let id = params['id']
          this.habitacionService.update(id,this.habi)
            .subscribe(() =>{
              Swal.fire({
                icon: 'success',
                title: `Registro actualizado`
              })
              this.router.navigate(['/habitaciones/tabla']);
          })
        })
      }
    })
  } 

  cargarHabi(): void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id){
        this.habitacionService.getHabitacion(id)
        .subscribe((habitacion) => this.habi = habitacion);
      }
    })
  }
}
