import { RentalImpl } from './../../models/rental.model';
import { Rental } from './../../models/rental.interface';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {
  currentId: number;
  rentalSelected: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) { 
    this.rentalSelected = new RentalImpl();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.currentId = +params['rentalid'];
        this.getRental(this.currentId);
      }
    );
  }

  getRental(rentalId: number) {
    this.rentalService.getRentalById(rentalId)
    .subscribe(
      (data: Rental) => {
        this.rentalSelected = data;
      }
    );
  }
}
