import { Rental } from './../models/rental.interface';
import { Injectable } from '@angular/core';

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

}
