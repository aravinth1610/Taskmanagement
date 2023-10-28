import { Component, DoCheck, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck  {

  vice: boolean = false;
  
constructor(public loginServices:LoginService){}
  ngDoCheck(): void {
    this.isViceLoggedIn();
  }
  ngOnInit(): void {
    this.isViceLoggedIn();
  }




  isViceLoggedIn() {
    console.log("--v");
    
    const viceRole = ['VICE'];
    if (this.loginServices.isViceLogin(viceRole)) {
      this.vice = true;
      return this.vice;
    } else {
      this.vice = false;
      return this.vice;
    }
  }

}
