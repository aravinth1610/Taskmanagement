import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { CreateTask } from '../model/create-task';
import { User } from '../model/user';
import { LoginService } from '../Services/login.service';

@Injectable()
export class UserAuthInterceptor implements HttpInterceptor {
  private router: Router = new Router();

  constructor(private loginServ: LoginService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let httpHeaders = new HttpHeaders();

    if (sessionStorage.getItem('userdetails')) {
      JSON.parse(sessionStorage.getItem('userdetails')!);
    }
    if (this.loginServ.email && this.loginServ.password) {
      console.log('_------islogin base');

      httpHeaders = httpHeaders.append(
        'Authorization',
        'Basic ' +
          window.btoa(this.loginServ.email + ':' + this.loginServ.password)
      );
      this.loginServ.email = '';
      this.loginServ.password = '';
    } else {
      console.log('_---__---auth base');

      let authorization = sessionStorage.getItem('Authorization');
      //console.log(authorization+"--a");

      if (authorization) {
        httpHeaders = httpHeaders.append('Authorization', authorization);
      }
    }
    httpHeaders = httpHeaders.append('X-Requested-With', 'XMLHttpRequest');
    const xhr = request.clone({
      headers: httpHeaders,
    });
    return next.handle(xhr).pipe(
      tap((err: any) => {
        if (err instanceof HttpErrorResponse) {
          console.log('--err');
          if (err.status === 200) {
            return;
          } else if (err.status == 401) {
            this.router.navigate(['/login']);
          } else if (err.status == 403) {
            this.router.navigate(['/home']);
          }
        }
      })
    );
  }
}
