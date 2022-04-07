import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { TokenService } from '../../security/service/token.service';
import { UsuarioService } from '../service/usuario.service';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usuarios: Usuario[];
  roles:string[];
  isAdmin = false;

  constructor(private userService:UsuarioService,
    private tokenService:TokenService) { }

  ngOnInit(): void {
    this.obtenerUsers();
    this.roles = this.tokenService.getAuthorities();
    this.roles.forEach(rol=>{
      if (rol === 'ROLE_ADMIN') {
        this.isAdmin = true;
      }
    })
  }

  private obtenerUsers(){
    this.userService.obtenerUsuarios().subscribe(data=>{
      this.usuarios = data;
    })
  }

  estado(estado:boolean):string{
    
    if (estado === true) {
      return 'Activo';
    }else{
      return 'Inactivo';
    }

  }

  eliminarUsuario(id:number){
    this.userService.eliminarUsuario(id).subscribe(() =>{
      Swal.fire({
        icon: 'success',
        title: `Eliminado`
      })

      this.obtenerUsers();

    })
  }

}
