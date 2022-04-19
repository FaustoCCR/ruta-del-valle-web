import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent implements OnInit {
  
  usuario: Usuario = new Usuario();
  id:number;

  roles:string[] = ["admin","user"];

  estados:boolean[]= [true,false];

  constructor(private usuarioService:UsuarioService,
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarUsuario();
    
  }

  onUpdate():void{

    if(this.id){
      this.usuarioService.actualizarUsuario(this.id,this.usuario)
      .subscribe(() =>{
        Swal.fire({
          icon: 'success',
          title: `Registro actualizado`
        })
        this.router.navigate(['/users']);
      }, err =>{
        Swal.fire({
          icon: 'error',
          title: JSON.stringify(` ${err.error.mensaje}`)
        })
      })
    }

  }

  cargarUsuario(): void{

    this.activatedRoute.params.subscribe(param =>{
      this.id = param['id']
      if (this.id) {

        this.usuarioService.obtenerUsuarioId(this.id)
        .subscribe((user) => this.usuario = user)
        
      }
    })
  }

  getestado(estado:boolean):string{
    
    if (estado === true) {
      return 'Activo';
    }else{
      return 'Inactivo';
    }

  }



}
