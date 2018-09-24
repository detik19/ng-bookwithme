import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  public register(user: User): Observable<HttpResponse<User>> {
    return this.http.post<User>('/api/auth/signup', user, {observe: 'response'});
    // return null;
  }
}
