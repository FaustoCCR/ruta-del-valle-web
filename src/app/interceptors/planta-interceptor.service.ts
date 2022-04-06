import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from '../laminates/security/service/token.service';

@Injectable({
  providedIn: 'root'
})
export class PlantaInterceptorService implements HttpInterceptor{

  /* Es un intermediario que recibe las peticiones del cliente y
  respuestas del servidor */

  constructor(private tokenService:TokenService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let interceptReq = req;
    const token = this.tokenService.getToken();
    if (token!=null) {
      interceptReq = req.clone({headers: req.headers.set('Authorization','Bearer' + token)})
      
    }

    return next.handle(interceptReq);


  }
}

export const plantaInterceptorProvider = [{provide:HTTP_INTERCEPTORS,useClass: PlantaInterceptorService, multi:true}];
