import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reserva } from '../reserva';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private urlEndPoint: string = "http://localhost:8080/api/reserva";

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private httpClient:HttpClient) { }

  obtenerDetalleReservaPorHabitacion(num:number): Observable<Reserva>{

    return this.httpClient.get<Reserva>(`${this.urlEndPoint}/detalle/${num}`);

  }

  createReservaByDni(reserva: Reserva): Observable<Reserva>{

    return this.httpClient.post<Reserva>(`${this.urlEndPoint}/byDni`,reserva,{headers: this.httpHeaders});
  }

  updateReserva(id_reserva: number,reserva: Reserva): Observable<Reserva>{
    
    return this.httpClient.put<Reserva>(`${this.urlEndPoint}/edit/${id_reserva}`,reserva,{headers: this.httpHeaders});
  }

  
}
