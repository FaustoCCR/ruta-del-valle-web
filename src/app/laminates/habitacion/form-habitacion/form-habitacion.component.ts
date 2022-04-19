import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Habitacion } from '../habitacion.interface';
import { HabitacionService } from '../service/habitacion.service';

@Component({
  selector: 'app-form-habitacion',
  templateUrl: './form-habitacion.component.html',
  styleUrls: ['./form-habitacion.component.css']
})
export class FormHabitacionComponent implements OnInit {

  public habi: Habitacion;//error

  constructor(private habitacionService:HabitacionService,
    private router: Router,
    private activateRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
  }

  onCreate():void{
    this.habitacionService.create(this.habi).subscribe(
      response =>{this.router.navigate(['/habitacion'])
      Swal.fire({
        icon: 'success',
        title: `Habitación ${response.id_habitacion} creada con éxito`
      })
    },error => console.log(error));
  } 

  update():void{

  } 
}
