import { DecodedTokenModel } from './../models/decoded-token.model';
import { EntityResponseTypeAuth } from './auth.service';
import { map } from 'rxjs/operators';
import { Auth } from './../models/auth.model';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { DecodedToken } from '../models/decoded-token.model';
import * as moment from 'moment';

const jwt = new JwtHelperService();

export type EntityResponseType = HttpResponse<User>;
export type EntityResponseTypeAuth = HttpResponse<Auth>;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken: DecodedToken;

  usernameUpdated = new EventEmitter<string>();
  authenticatedUpdated = new EventEmitter<boolean>();

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('bwm_meta')) || new DecodedTokenModel();
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

  private getExpiration(exp: number) {
   // this.decodedToken = JSON.parse(localStorage.getItem('bwm_meta'));
    return moment.unix(exp);
  }

  public isAuthenticated(): boolean {
    this.decodedToken = JSON.parse(localStorage.getItem('bwm_meta'));
    if (!this.decodedToken) {
      // this.authenticatedUpdated.emit(false);
      return false;
    }
    const isAuth = moment().isBefore(this.getExpiration(this.decodedToken.exp));
    return isAuth;
  }

  public getUsername(): string {
    // debugger;
    this.decodedToken = JSON.parse(localStorage.getItem('bwm_meta'));
    if (!this.decodedToken) {
      return '';
    }
    return this.decodedToken.username;
    }

  public getAuthToken(): string {
    return localStorage.getItem('bwm_token');
  }
  public logout() {
    localStorage.removeItem('bwm_token');
    localStorage.removeItem('bwm_meta');

    this.authenticatedUpdated.emit(this.isAuthenticated());
    this.usernameUpdated.emit(this.getUsername());


  }
  private saveToken(res: EntityResponseTypeAuth): HttpResponse<any> {
      const auth: Auth = res.body;
      this.decodedToken = jwt.decodeToken(auth.token);
      localStorage.setItem('bwm_token', auth.token);
      localStorage.setItem('bwm_meta', JSON.stringify(this.decodedToken));
      this.authenticatedUpdated.emit(this.isAuthenticated());
      this.usernameUpdated.emit(this.getUsername());

      return res;
  }
}
