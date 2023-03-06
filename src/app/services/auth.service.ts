import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject, throwError } from 'rxjs';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TokenPayload } from '../pages/welcome/models/token-payload';

@Injectable()
export class AuthService {
  static NAME = 'token';
  static TOKEN: string;
  public token!: string;
  tokenPayload: TokenPayload | undefined;
  username!: string;
  userAction: Subject<void> = new Subject();
  permissions!: any[] ;

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
    this.token = AuthService.TOKEN = <string>this.getToken();
    this.setTokenPayload(this.token);
    // if (!this.tokenPayload) return;
    // this.permissions = this.tokenPayload.authorities;
  }

  public getTokenPayload(token: string) {
    // return this.jwtHelper.decodeToken(token);
  }

  public setTokenPayload(token: string) {
    // this.tokenPayload = this.getTokenPayload(token);
    if (this.tokenPayload) return;
    const data: any = {};
    this.tokenPayload = data;
  }

  public isAuthenticated(): boolean {
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  public saveToken(token: string) {
    sessionStorage.setItem(AuthService.NAME, token);
  }

  public getToken() {
    return sessionStorage.getItem(AuthService.NAME);
  }

  public clearToken() {
    sessionStorage.clear();
  }

  get getAction(): Observable<void> {
    return this.userAction.asObservable();
  };

  loadAction() {
    this.userAction.next();
  }


  loginUserFromServer(user :User):Observable<User>{
    return this.http.post<User>("http://192.168.10.146:8080/login",user)
 
}
      
  registerUserFromServer(user :User):Observable<User>{ 
    return this.http.post<User>("http://192.168.10.146:8080/register",user);
  }

}
