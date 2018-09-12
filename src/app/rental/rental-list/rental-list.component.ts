import { Component, OnInit } from '@angular/core';
import { RentalService } from '../../services/rental.service';
import { Rental } from '../../models/rental.interface';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {

  rentals: Rental[];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
   // this.rentals = this.rentalService.loadAll();

   this.rentalService.getRentals()
   .subscribe(
     (data) => {
      this.rentals = data;
    },
    (error) => {
      console.log(error);
    },
    () => {
      console.log('im complete');
    }
   );
  }

}
