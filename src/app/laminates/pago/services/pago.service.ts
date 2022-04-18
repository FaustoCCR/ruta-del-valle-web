import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Pago } from '../pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  private urlEndPoint: string = "http://localhost:8080/api/pago";

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private httpClient:HttpClient) { }

  crearPago(pago:Pago): Observable<Pago>{
    return this.httpClient.post<Pago>(this.urlEndPoint,pago,{headers: this.httpHeaders});
  }

  obtenerPagos(): Observable<Pago[]>{
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Pago[])
    )
  }

  generateReport(id_reserva:number):Observable<any>{

    const headers = new HttpHeaders().set('Content-Type','application/json');

    return this.httpClient.get(`${this.urlEndPoint}/reporte/${id_reserva}`,{headers, responseType: 'blob' as 'json'});
  }
}
