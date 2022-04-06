import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../jwt-dto';
import { LoginUsuario } from '../login-usuario';
import { NuevoUsuario } from '../nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) { }

  /* Método para registrar Usuario */
  public newUser(nuevoUsuario: NuevoUsuario):Observable<any>{
    return this.httpClient.post(this.authURL + 'nuevo',nuevoUsuario);
  }

  /* Método para logearse */
  public login(loginUsuario: LoginUsuario):Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario);
  }
}
