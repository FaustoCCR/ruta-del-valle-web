import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Planta } from '../planta';
import { PlantaService } from '../service/planta.service';

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {

  plantas: Planta[];

  constructor(private plantaService: PlantaService) { }

  ngOnInit(): void {
    this.obtenerPlantas();
  }

  private obtenerPlantas(){
    this.plantaService.obtenerPlantas().subscribe(data => {
      this.plantas = data;
    });
  }

  eliminarPlanta(id:number){
    this.plantaService.eliminarPlanta(id).subscribe(() => {
      
      Swal.fire({
        icon: 'success',
        title: `Eliminado`
      })

      this.obtenerPlantas();
      
    })
  }

}
