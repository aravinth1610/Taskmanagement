import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Appconstant } from '../constant/appconstant';
import { Observable, map, tap } from 'rxjs';
import { getCookie } from 'typescript-cookie';
import { Router } from '@angular/router';
import { UserAuthService } from './user-auth.service';
import { Authority } from '../model/user-response';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isVice: boolean = false;
  email: string;
  password: string;
  vl: string[];
  roles: Authority[];

  constructor(
    private http: HttpClient,
    private router: Router,
    private userAuthServ: UserAuthService
  ) {}

  login() {
    console.log('fgfg');

    return this.http
      .get(environment.apiUrl + Appconstant.LOGIN_API_URL, {
        observe: 'response',
        withCredentials: true,
      })
      .pipe(
        map((data: any) => {
          console.log(data);
          this.vl = data.body;
          console.log(!data.headers.get('Authorization') + '--00');
          this.userAuthServ.setToken(data.headers.get('Authorization'));
          this.userAuthServ.setUser(this.vl);
          //    let d = this.vl.filter((v) => v === 'ara');
          return this.vl;
        })
      );
  }

  loginUserData(email: string, password: string) {
    this.email = email;
    this.password = password;
  }

  isViceLogin(userRoles: string[]): boolean {
    this.roles = this.userAuthServ.getRole();
    console.log(this.roles);
    if (this.roles != null) {
      this.roles.forEach((authorityRole) => {
        userRoles.forEach((role) => {
          if (role == authorityRole.role) {
            this.isVice = true;
          } else {
            this.isVice = false;
          }
        });
      });
    } else {
      this.isVice = false;
    }
    return this.isVice;
  }
}
