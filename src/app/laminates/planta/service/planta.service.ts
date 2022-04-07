import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Planta } from '../planta';

@Injectable({
  providedIn: 'root'
})
export class PlantaService {

  private urlEndPoint: string = "http://localhost:8080/api/plantas";

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private httpClient: HttpClient) { }

  obtenerPlantas(): Observable<Planta[]>{
    return this.httpClient.get(`${this.urlEndPoint}`).pipe(
      map(response => response as Planta[]));
  }

  obtenerPlantaId(id:number): Observable<Planta>{
    return this.httpClient.get<Planta>(`${this.urlEndPoint}/${id}`);
  }

  guardarPlanta(planta: Planta): Observable<Planta>{
    return this.httpClient.post<Planta>(`${this.urlEndPoint}`,planta,{headers: this.httpHeaders});
  }

  update(id:number, planta:Planta): Observable<Planta>{

    return this.httpClient.put<Planta>(`${this.urlEndPoint}/${id}`, planta,{headers: this.httpHeaders});
  }

  eliminarPlanta(id:number): Observable<Planta>{

    return this.httpClient.delete<Planta>(`${this.urlEndPoint}/${id}`);
  }
}
