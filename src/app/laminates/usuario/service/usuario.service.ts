import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint: string = "http://localhost:8080/api/users";

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  
  constructor(private httpClient: HttpClient) { }

  obtenerUsuarios(): Observable<Usuario[]>{
    return this.httpClient.get(`${this.urlEndPoint}`).pipe(
      map(response => response as Usuario[]));
  }

  obtenerUsuarioId(id:number): Observable<Usuario>{
    return this.httpClient.get<Usuario>(`${this.urlEndPoint}/${id}`);
  }

  actualizarUsuario(id:number, usuario:Usuario): Observable<any>{
    return this.httpClient.put(`${this.urlEndPoint}/${id}`,usuario,{headers: this.httpHeaders});

  }

  eliminarUsuario(id:number): Observable<Usuario>{
    return this.httpClient.delete<Usuario>(`${this.urlEndPoint}/${id}`);
  }

}
