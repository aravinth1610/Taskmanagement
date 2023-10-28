import { Injectable } from '@angular/core';
import { Authority, UserResponse } from '../model/user-response';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  roles: string[];
  userRes: UserResponse;

  constructor() {}

  public setToken(token: string) {
    window.sessionStorage.setItem('Authorization', token);
  }

  public getToken() {
    return window.sessionStorage.getItem('Authorization');
  }

  public setUser(user: string[]) {
    window.sessionStorage.setItem('userdetails', JSON.stringify(user));
  }

  public getUser() {
    return window.sessionStorage.getItem('userdetails');
  }

  public getRole(): Authority[] {
    let user = sessionStorage.getItem('userdetails');
    if(user!=null)
    {
    this.userRes = JSON.parse(user);
    return  this.userRes.authority;
  }
  else{
    return null;
  }
  }

  public roleMatches() {}

  public clear() {
    window.sessionStorage.clear();
  }

  public isLoggedIn() {
    return this.getUser() && this.getToken();
  }
}
