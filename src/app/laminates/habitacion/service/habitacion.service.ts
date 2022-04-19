import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Habitacion } from '../habitacion';

@Injectable({
  providedIn: 'root'
})
export class HabitacionService {

  private urlEndPoint: string = "http://localhost:8080/api/habitaciones";
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

  getHabitacionByEstado(param:String):Observable<Habitacion[]>{
    return this.httpClient.get(`${this.urlEndPoint}/?estado=${param}`).pipe(
      map(response => response as Habitacion[])
    );
  }

  getHabitacion(id:number): Observable<Habitacion> {

    return this.httpClient.get<Habitacion>(`${this.urlEndPoint}/${id}`);
  }
  
  getHabitacionPorNumero(num:number): Observable<Habitacion>{
    return this.httpClient.get<Habitacion>(`${this.urlEndPoint}/num_habitacion/${num}`);
  }

  create(habitacion: Habitacion): Observable<Habitacion> {

    return this.httpClient.post<Habitacion>(this.urlEndPoint, habitacion, {headers: this.httpHeaders})
  }

  update(id_habitacion:number,habitacion: Habitacion): Observable<Habitacion>{

    return this.httpClient.put<Habitacion>(`${this.urlEndPoint}/${id_habitacion}`, habitacion, {headers: this.httpHeaders})
  }

  delete(id:number): Observable<Habitacion> {

    return this.httpClient.delete<Habitacion>(`${this.urlEndPoint}/${id}`);
  }


}
