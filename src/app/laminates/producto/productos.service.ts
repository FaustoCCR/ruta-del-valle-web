import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private urlEndPoint: string = "http://localhost:8080/api/productos";

  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  constructor(private httpClient: HttpClient) { }

  obtenerProducto(): Observable<Producto[]>{
    return this.httpClient.get(`${this.urlEndPoint}`).pipe(
      map(response => response as Producto[]));
  }

  obtenerProductoId(id:number): Observable<Producto>{
    return this.httpClient.get<Producto>(`${this.urlEndPoint}/${id}`);
  }

  crearProducto(producto: Producto): Observable<Producto>{
    return this.httpClient.post<Producto>(`${this.urlEndPoint}`,producto,{headers: this.httpHeaders});
  }

  update(id:number, producto:Producto): Observable<Producto>{

    return this.httpClient.put<Producto>(`${this.urlEndPoint}/${id}`, producto,{headers: this.httpHeaders});
  }

  eliminarProducto(id:number): Observable<Producto>{

    return this.httpClient.delete<Producto>(`${this.urlEndPoint}/${id}`);
  }
 }