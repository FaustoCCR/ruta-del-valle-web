import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Consumo } from './consumo';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  private urlEndPoint: string = "http://localhost:8080/api/consumo";
  private httpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json' })

  constructor(private httpClient: HttpClient) { }

  /* métodos del backend */
  getConsumo():Observable<Consumo[]> {
    return this.httpClient.get(this.urlEndPoint).pipe(
      map(response => response as Consumo[]));
  }

  getConsumoId(id:number): Observable<Consumo>{

    return this.httpClient.get<Consumo>(`${this.urlEndPoint}/${id}`);
  }

  create(consumo: Consumo): Observable<Consumo>{

    return this.httpClient.post<Consumo>(this.urlEndPoint, consumo,{headers: this.httpHeaders});

  }

  update(id_consumo:number, consumo:Consumo): Observable<Consumo>{

    return this.httpClient.put<Consumo>(`${this.urlEndPoint}/${id_consumo}`, consumo,{headers: this.httpHeaders});
  }

  /*Método para eliminar un cliente por ID */
  delete(id:number):Observable<Consumo>{
    return this.httpClient.delete<Consumo>(`${this.urlEndPoint}/${id}`);
  }
}
