import { Rental } from './rental.interface';

export class RentalItem implements Rental {
    constructor(  _id?: string,
        title?: string,
        city?: string,
        street?: string,
        category?: string,
        image?: string,
        bedrooms?: number,
        description?: string,
        dailyRate?: number,
        shared?: boolean,
        createdAt?: Date) {}
}
