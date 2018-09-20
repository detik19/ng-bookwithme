import { Rental } from './../models/rental.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { RestService } from './rest.service';

@Injectable()
export class RentalService {

  // rentals: Rental[] = [
  //   {
  //     id: 1,
  //     title: 'Central Apartemen',
  //     city: 'New York',
  //     street: 'Times Square',
  //     category: 'apartemen',
  //     image: 'http://via.placelholder.com/350x250',
  //     bedrooms: 3,
  //     description: 'Very nice apartemen',
  //     dailyRate: 1,
  //     shared: false,
  //     createdAt: new Date()
  //   },
  //   {
  //     id: 2,
  //     title: 'lala',
  //     city: 'lala',
  //     street: 'jalan raya',
  //     category: '',
  //     image: 'http://via.placelholder.com/350x250',
  //     bedrooms: 1,
  //     description: 'Very nice apartemen',
  //     dailyRate: 1,
  //     shared: false,
  //     createdAt: new Date()
  //   },
  //   {
  //     id: 3,
  //     title: 'lala',
  //     city: 'lala',
  //     street: 'jalan raya',
  //     category: '',
  //     image: 'http://via.placelholder.com/350x250',
  //     bedrooms: 1,
  //     description: 'Very nice apartemen',
  //     dailyRate: 1,
  //     shared: false,
  //     createdAt: new Date()
  //   },
  //   {
  //     id: 4,
  //     title: 'lala',
  //     city: 'lala',
  //     street: 'jalan raya',
  //     category: '',
  //     image: 'http://via.placelholder.com/350x250',
  //     bedrooms: 1,
  //     description: 'Very nice apartemen',
  //     dailyRate: 1,
  //     shared: false,
  //     createdAt: new Date()
  //   }
  // ];

  private resourceUrl = 'http://127.0.0.1:3001/' + 'api/rentals';

  constructor(protected http: HttpClient) {
  }

  // loadAll(): Rental[] {
  //   return this.rentals;
  // }

  getRentalById(rentalId: string): Observable<HttpResponse<Rental>> {
    return this.http.get<Rental>('/api/rentals/' + rentalId, {observe: 'response'});
  }

  getRentals(): Observable<HttpResponse<any>> {
    return this.http.get('/api/rentals', {observe: 'response'});
   // return this.http.get(this.resourceUrl, {observe: 'response'});

  }
}
