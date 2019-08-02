import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/api/register';
  private _loginUrl = 'http://localhost:3000/api/login';
  private _refreshTokenUrl = 'http://localhost:3000/api/refreshToken';

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  refreshToken() {
    return this.http.post<any>(this._refreshTokenUrl, {
      refreshToken: this.getRefreshToken()
    });
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

  loggedIn() {
    //   console.log('check if is logged in');
    //   return this.http.get<boolean>('http://localhost:3000/api/isLoggedIn');
    return !!localStorage.getItem('accessToken');
  }

  logoutUser() {
    localStorage.removeItem('accessToken');
    this.router.navigate(['/applications']);
  }

  getToken() {
    return localStorage.getItem('accessToken');
  }

  getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }
}
