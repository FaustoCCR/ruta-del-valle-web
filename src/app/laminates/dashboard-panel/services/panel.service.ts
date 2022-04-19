import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panel } from '../panel';

@Injectable({
  providedIn: 'root'
})
export class PanelService {

  private urlEndPoint: string = "http://localhost:8080/api/panel";

  constructor(private httpClient:HttpClient) { }

  getSummary():Observable<Panel>{

    return this.httpClient.get<Panel>(this.urlEndPoint);
  }

}
