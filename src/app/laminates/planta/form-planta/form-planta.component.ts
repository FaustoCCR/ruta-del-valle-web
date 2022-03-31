import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Planta } from '../planta';
import { PlantaService } from '../service/planta.service';

@Component({
  selector: 'app-form-planta',
  templateUrl: './form-planta.component.html',
  styleUrls: ['./form-planta.component.css']
})
export class FormPlantaComponent implements OnInit {

  planta: Planta = new Planta();

  constructor(private plantaService: PlantaService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarPlanta()
  }

  onCreate():void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id==null){
        /* si el no existe id en la url --> guardamos */
        this.plantaService.guardarPlanta(this.planta)
        .subscribe(data =>{
          Swal.fire({
            icon: 'success',
            title: `${data.nombre} creada con éxito`
          })
          this.router.navigate(['/plantas']);
        },error => console.log(error));
      }else{
        /* caso contrario actualizamos el registro */
        this.plantaService.update(id,this.planta)
        .subscribe(() =>{
          Swal.fire({
            icon: 'success',
            title: `Registro actualizado`
          })
          this.router.navigate(['/plantas']);
        })
      }

    })
  }

  cargarPlanta(): void{
    this.activateRoute.params.subscribe(params =>{

      let id = params['id']
      if(id){
        this.plantaService.obtenerPlantaId(id)
        .subscribe((planta) => this.planta = planta);
      }
    })
  }

}
