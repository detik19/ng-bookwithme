import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental.interface';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit, OnDestroy {

  rentals: Rental[];
  rentalsObservable: any;
  daterange;
  constructor(private rentalService: RentalService) { }

  ngOnInit() {
   // this.rentals = this.rentalService.loadAll();

   this.rentalService.getRentals()
   .subscribe(
     (data) => {
       console.log(data);
       this.rentals = data.body;
    },
    (error) => {
      console.log(error);
    },
    () => {
      console.log('im complete');
    }
   );
  }

  ngOnDestroy() {
    // this.rentalService.getRentals().
  }
}
