import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private tipoHbService:TipohbService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    
    this.tipoHbService.create(this.tipo)
    .subscribe(tipo =>{
      
      Swal.fire({
        icon: 'success',
        title: `Tipo de Habitación ${tipo.nombre} creada con éxito`
      })
      this.router.navigate(['/']);
    })
  
  }



}
