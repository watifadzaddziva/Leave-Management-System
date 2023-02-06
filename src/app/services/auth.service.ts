import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router, UrlSerializer } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject, throwError } from 'rxjs';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  static NAME = 'token';
  static TOKEN: string;
  public token!: string;
  tokenPayload: User | undefined;
  username!: string;
  userAction: Subject<void> = new Subject();
  permissions!: any[] ;
  

  constructor(private router : Router, public jwtHelper: JwtHelperService,
    private http: HttpClient,
   
    )
    {
      this.token = AuthService.TOKEN = <string>this.getToken();
      this.setTokenPayload(this.token);
     }

  setToken(token: string){
    localStorage.setItem('token', token)
  }

  getToken(): string| any{
    return localStorage.getItem('token')
  }

  currentUser?: User | undefined;
  redirectUrl = '';
  get isLoggedIn(): boolean
   {return !!this.currentUser; }

  public setTokenPayload(token: string) {
    this.tokenPayload = this.getTokenPayload(token);
    if (this.tokenPayload) return;
    const data: any = {};
    this.tokenPayload = data;
  }

  public getTokenPayload(token: string) {
    return this.jwtHelper.decodeToken(token);
  }

  public isAuthenticated(): boolean {
    console.log(this.token)
    return !this.jwtHelper.isTokenExpired(this.token);
  }

  public saveToken(token: string) {
    sessionStorage.setItem(AuthService.NAME, token);
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
    return this.http.post<User>("http://192.168.10.146:8081/login",user)
 
}
      
  registerUserFromServer(user :User):Observable<User>{ 
    return this.http.post<User>("http://192.168.10.146:8081/register",user);
  }

}
