import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject, throwError } from 'rxjs';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenPayload } from '../pages/welcome/models/token-payload';
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable()
export class AuthService {
  baseUrl='http://localhost:8085'
  static NAME = 'token';
  static TOKEN: string;
  token: string;
  tokenPayload: any;
  

  constructor(public jwtHelper: JwtHelperService,private permissionsService:NgxPermissionsService, private http: HttpClient) {
    this.token = AuthService.TOKEN = <string>this.getToken();
    if (!this.token) return;
    this.setTokenPayload();
   
  }

  setToken(token: string) {
    this.token=token;
    sessionStorage.setItem(AuthService.NAME, token)
}

getToken() {
    return sessionStorage.getItem(AuthService.NAME)
    
}

public setTokenPayload() {
  this.tokenPayload = this.decodeToken();
  if (this.tokenPayload) {
    const role = this.tokenPayload.role;
    const user = this.tokenPayload.sub;
    this.permissionsService.loadPermissions([role]);
  } else {
    let data: any = {};
    this.tokenPayload = data;
  }
}

public clearToken() {
    sessionStorage.clear();
}

public decodeToken() {
  const decodedToken= this.jwtHelper.decodeToken(this.token)
    return decodedToken;
}

public isAuthenticated():boolean {
    return !this.jwtHelper.isTokenExpired(this.token);
}

public isLoggedIn(){
    return this.getToken() ? true : false
}



  loginUserFromServer(user :any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/login`,user)
 
}
      
  registerUserFromServer(user :any):Observable<any>{ 
    return this.http.post<any>(`${this.baseUrl}/register`,user);
  }

  sendPasswordResetEmail(email:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/reset/request-password-reset`,email) 
  }


  setNewPassword(data:any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/reset/reset-password`,data)
  }
}
