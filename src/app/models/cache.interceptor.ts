import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(req.url.includes('/login') || req.url.includes('/logout')){
        req= req.clone({
            setHeaders:{
                'Cache-Control': 'no-store, no-cache',
            },
        });  
        }
        return next.handle(req);
    }

}
