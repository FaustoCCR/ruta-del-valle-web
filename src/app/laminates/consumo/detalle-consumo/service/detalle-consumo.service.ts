import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DetalleConsumo } from '../detalle-consumo';

@Injectable({
  providedIn: 'root'
})
export class DetalleConsumoService {
  private urlEndPoint: string = "http://localhost:8080/api/detalleconsumo";
  private httpHeaders = new HttpHeaders({ 'Content-Type' : 'application/json' })

  constructor(private httpClient: HttpClient) { }

    /* métodos del backend */


    create(detalle: DetalleConsumo){
      
    }


}
