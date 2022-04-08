import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../security/service/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLogged = false;
  username: string|null= '';

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
    this.checkLogin();
  }

  checkLogin(): void{
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.username = this.tokenService.getUsername();
    }else{
      this.isLogged = false;
    }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

}
