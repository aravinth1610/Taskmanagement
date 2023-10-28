import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';
import { inject } from '@angular/core';
import { LoginService } from '../Services/login.service';

export const canActiveUserAuthGuard: CanActivateFn = (route, state) => {
  const userAuthServ = inject(UserAuthService);
  const userLogin = inject(LoginService);
  const router = inject(Router);
  

  if (userAuthServ.getToken() != null) {
    const role = route.data['roles'] as Array<string>;
    if (userLogin.isViceLogin(role)) {
      return true;
    } else {
      router.navigate(['login']);
      return false;
    }
  } else {
    router.navigate(['login']);
    return false;
  }
};
