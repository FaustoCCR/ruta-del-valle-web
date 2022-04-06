import { Injectable } from '@angular/core';


/* variables que se almacenarán en el navegador */

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles: Array<string> = [];

  constructor() { }

  /* getters - setters */

  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }

  public getToken():string|null {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public setUsername(username:string):void{
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY,username);
  }

  public getUsername():string|null {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public setAuthorities(authorities:string[]):void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities));/* --> el array lo pasamos como JSON */
  }

  public getAuthorities(): string[]{
    this.roles = [];
    if (sessionStorage.getItem(AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any)=> {
        this.roles.push(authority.authority);
      });
    }
    return this.roles;
  }

  /* método para cerrar sesión */
  public logOut(): void{
    window.sessionStorage.clear();
    
  }


  
}
