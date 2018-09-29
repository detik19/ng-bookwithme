import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.authService.getAuthToken();
      //  console.log(token);
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: 'Bearer ' + token
                }
            });
           // console.log(req.headers);
        }


        return next.handle(req);
    }
}