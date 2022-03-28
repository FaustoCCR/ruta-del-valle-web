import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Tipohb } from '../tipohb';

@Injectable({
  providedIn: 'root'
})
export class TipohbService {

  private urlEndPoint: string = "http://localhost:8080/api/tiposhb/";
  private httpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json' })

  constructor(private httpClient: HttpClient) { }

  /* métodos del backend */
  getTiposHb():Observable<Tipohb[]> {
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Tipohb[]));
  }

  getTipoHb(id:number): Observable<Tipohb>{

    return this.httpClient.get<Tipohb>(`${this.urlEndPoint}/${id}`);
  }

  create(tipohb: Tipohb): Observable<Tipohb>{

    return this.httpClient.post<Tipohb>(this.urlEndPoint, tipohb,{headers: this.httpHeaders});

  }

  update(id_tipo:number, tipohb:Tipohb): Observable<Tipohb>{

    return this.httpClient.put<Tipohb>(`${this.urlEndPoint}/${id_tipo}`, tipohb,{headers: this.httpHeaders});
  }

  /*Método para eliminar un cliente por ID */
  delete(id:number):Observable<Tipohb>{
    return this.httpClient.delete<Tipohb>(`${this.urlEndPoint}/${id}`);
  }

}
