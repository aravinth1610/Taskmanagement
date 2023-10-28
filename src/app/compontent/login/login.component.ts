import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { LoginService } from 'src/app/Services/login.service';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { User } from 'src/app/model/user';
// npm i typescript-cookie
import { getCookie } from 'typescript-cookie';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  //we can take value by this also
  // @ViewChild('username') username: ElementRef;
  // @ViewChild('password') password: ElementRef;

  router: Router = inject(Router);
  isLogin: boolean = false;

  constructor(
    private fbuilder: FormBuilder,
    private userAuthSer: UserAuthService
  ) {}
  user: User;
  userValue: any;
  loginServices = inject(LoginService);
  //loginServices: LoginService = inject(LoginService);

  userLogin = this.fbuilder.group({
    email: [
      '',
      {
        Validations: [Validators.required, Validators.email],
      },
    ],
    password: [
      '',
      {
        Validations: [Validators.required],
      },
    ],
  });

  login() {
    this.userValue = this.userLogin.value;

    const email = this.userValue.email;
    const password = this.userValue.password;
    this.loginServices.loginUserData(email, password);

    this.loginServices.login().subscribe({
      next(x) {
        console.log(x);
      },
      error(e) {
        console.log(e);
        console.log(e.status);
      },
      complete: () => {
        this.router.navigateByUrl('/vice/createtask');
      },
    });
  }

  
}
