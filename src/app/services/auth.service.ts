import { EntityResponseTypeAuth } from './auth.service';
import { map } from 'rxjs/operators';
import { Auth } from './../models/auth.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
const jwt = new JwtHelperService();

export type EntityResponseType = HttpResponse<User>;
export type EntityResponseTypeAuth = HttpResponse<Auth>;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

   }
  public register(user: User): Observable<EntityResponseType> {
    return this.http.post<User>('/api/auth/signup', user, {observe: 'response'});
  }

  public login(user: User): Observable<EntityResponseTypeAuth> {
    return this.http.post<Auth>('/api/auth/signin', user, {observe: 'response'})
    .pipe(
      map(
        (res: EntityResponseTypeAuth) =>
          this.saveToken(res)
     )
    );
}


  private saveToken(res: EntityResponseTypeAuth): HttpResponse<any> {
      const auth: Auth = res.body;
      localStorage.setItem('bwm_token', auth.token);
      console.log(jwt.decodeToken(auth.token));
      return res;
  }
}
