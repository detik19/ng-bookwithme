import { EntityResponseTypeAuth } from './auth.service';
import { map } from 'rxjs/operators';
import { Auth } from './../models/auth.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { RestService } from './rest.service';
import { ThrowStmt } from '@angular/compiler';
export type EntityResponseType = HttpResponse<User>;
export type EntityResponseTypeAuth = HttpResponse<Auth>;

@Injectable({
  providedIn: 'root'
})
export class AuthService extends RestService {

  constructor(protected http: HttpClient) {
    super(http);
   }
  public register(user: User): Observable<EntityResponseType> {
    return this.http.post<User>('/api/auth/signup', user, {observe: 'response'});
  }

  public login(user: User): Observable<EntityResponseTypeAuth> {
    return this.http.post<Auth>('/api/auth/signin', user, {observe: 'response'})
    .pipe(
      map(
        (res: EntityResponseType) => {
          console.log(res);
          this.convertResponse(res);
        }
     ),
     map((authRes: Auth) => this.saveToken(authRes))
  );
}


  private saveToken(auth: Auth): any {
    console.log(auth);
    // localStorage.setItem('token', auth.token);
    // return auth;
  }

