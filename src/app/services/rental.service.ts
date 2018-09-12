import { Rental } from './../models/rental.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RentalService {
  rentals: Rental[] = [
    {
      id: 1,
      title: 'Central Apartemen',
      city: 'New York',
      street: 'Times Square',
      category: 'apartemen',
      image: 'http://via.placelholder.com/350x250',
      bedrooms: 3,
      description: 'Very nice apartemen',
      dailyRate: 1,
      shared: false,
      createdAt: new Date()
    },
    {
      id: 2,
      title: 'lala',
      city: 'lala',
      street: 'jalan raya',
      category: '',
      image: 'http://via.placelholder.com/350x250',
      bedrooms: 1,
      description: 'Very nice apartemen',
      dailyRate: 1,
      shared: false,
      createdAt: new Date()
    },
    {
      id: 3,
      title: 'lala',
      city: 'lala',
      street: 'jalan raya',
      category: '',
      image: 'http://via.placelholder.com/350x250',
      bedrooms: 1,
      description: 'Very nice apartemen',
      dailyRate: 1,
      shared: false,
      createdAt: new Date()
    },
    {
      id: 4,
      title: 'lala',
      city: 'lala',
      street: 'jalan raya',
      category: '',
      image: 'http://via.placelholder.com/350x250',
      bedrooms: 1,
      description: 'Very nice apartemen',
      dailyRate: 1,
      shared: false,
      createdAt: new Date()
    }
  ];

  constructor() { }

  loadAll(): Rental[] {
    return this.rentals;
  }

  getRentals(): Observable<any> {
    const rentalObservable = new Observable( (observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);

      setTimeout(() => {
        observer.error('im error');
      }, 2000);

      setTimeout(() => {
        observer.complete();
      }, 3000);
    });
    return rentalObservable;
  }
}
