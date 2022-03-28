import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Habitacion } from '../habitacion.interface';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  private urlEndPoint: string = "http://localhost:8080/api/habitaciones/";
  private httpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json' })

  /* Parámetros de consulta */
  private planta:string = 'id_planta';
  private tipo:string = 'id_tipo';

  constructor(private httpClient: HttpClient) { }


  /* métodos del backend */
  getHabitaciones():Observable<Habitacion[]> {
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Habitacion[]));
  }

  getHabitacion(id:number): Observable<Habitacion> {

    return this.httpClient.get<Habitacion>(`${this.urlEndPoint}/${id}`);
  }

  create(habitacion: Habitacion): Observable<Habitacion> {

    return this.httpClient.post<Habitacion>(this.urlEndPoint, habitacion, {headers: this.httpHeaders})
  }

  update(id_habitacion:number, id_planta:number, id_tipo:number, habitacion: Habitacion): Observable<Habitacion>{

    return this.httpClient.put<Habitacion>(`${this.urlEndPoint}/${id_habitacion}?${this.planta}=${id_planta}&${this.tipo}=${id_tipo}`, habitacion, {headers: this.httpHeaders})
  }

  delete(id:number): Observable<Habitacion> {

    return this.httpClient.delete<Habitacion>(`${this.urlEndPoint}/${id}`);
  }


}
