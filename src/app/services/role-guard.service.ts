import { Injectable } from '@angular/core';
import {  Router, CanActivate, ActivatedRouteSnapshot} from '@angular/router';
import { AuthService } from './auth.service';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
  tokenPayload: any;

  constructor(public auth: AuthService, public router: Router) {}

  canActivate ( route : ActivatedRouteSnapshot): boolean{
     const expectedRole = route.data['expectedRole'];
     const token = sessionStorage.getItem('token');

      const tokenPayload = decode('token');

      if (
        !this.auth.isAuthenticated() || this.tokenPayload.role !== expectedRole
      ) {
        this.router.navigate(['login']);
        return false;
      }
      return true;
  }
}
