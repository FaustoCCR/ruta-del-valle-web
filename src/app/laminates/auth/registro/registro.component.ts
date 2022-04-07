import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { NuevoUsuario } from '../../security/nuevo-usuario';
import { AuthService } from '../../security/service/auth.service';
import { TokenService } from '../../security/service/token.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    /* variables */
    isRegister= false;
    isRegisterFail = false;
    nuevoUsuario:NuevoUsuario;
    dni:string;
    nombre:string;
    email:string;
    telefono:string;
    username:string;
    password:string;
    estado = true;
    rol:string = 'admin';
    /* [] */
    errMsj: string;
    isLogged= false;

  constructor(
    private tokenService:TokenService,
    private authService:AuthService,
    private router:Router
  ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {

      this.isLogged = true;
    }
  }

  onRegister(): void{
    this.nuevoUsuario = new NuevoUsuario(this.dni,this.nombre,this.email,this.telefono,this.username,this.password,this.estado,this.rol);
    this.authService.newUser(this.nuevoUsuario).subscribe(
      ()=> {
        this.isRegister = true;
        this.isRegisterFail = false;
        Swal.fire({
          icon: 'success',
          title: `Usuario Registrado`
        })

        this.router.navigate(['/users']);

      },
      err =>{
        this.isRegisterFail = true;
        this.isRegister = false
        this.errMsj = err.error.mensaje;

        console.log(err.error.message);

        Swal.fire({
          icon: 'error',
          title: JSON.stringify(` ${err.error.mensaje}`)
        })
       
      }
    )
  }

}
