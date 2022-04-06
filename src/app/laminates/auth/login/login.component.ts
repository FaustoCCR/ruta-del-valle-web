import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from '../../security/login-usuario';
import { AuthService } from '../../security/service/auth.service';
import { TokenService } from '../../security/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  /* variables */
  isLogged= false;
  isLoginFail = false;
  loginUsuario:LoginUsuario;
  username:string;
  password:string;
  roles: string[] = [];
  /* [] */
  errMsj: string;

  constructor(private tokenService:TokenService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    /* si nos devuelve un token significa que estamos logeados */
    if (this.tokenService.getToken()) {

      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void{
    this.loginUsuario = new LoginUsuario(this.username,this.password);
    this.authService.login(this.loginUsuario).subscribe(
      data => {
        this.isLogged = true;
        this.isLoginFail = false;
        
        this.tokenService.setToken(data.token);
        this.tokenService.setUsername(data.username);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;

        /* redirigimos al index */
        this.router.navigate(['/']);

      },
      err =>{
        this.isLogged = false;
        this.isLoginFail = true;
        this.errMsj = err.error.mensaje;

        console.log(this.errMsj);
      }
    )
  }

}
