import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../../security/service/token.service';
import { Planta } from '../planta';
import { PlantaService } from '../service/planta.service';

@Component({
  selector: 'app-lista-plantas',
  templateUrl: './lista-plantas.component.html',
  styleUrls: ['./lista-plantas.component.css']
})
export class ListaPlantasComponent implements OnInit {

  plantas: Planta[];
  roles: string[];
  isAdmin = false;

  constructor(private plantaService: PlantaService,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    this.obtenerPlantas();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    });
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
