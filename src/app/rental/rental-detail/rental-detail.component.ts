import { HttpResponse } from '@angular/common/http';
import { Rental } from './../../models/rental.interface';
import { RentalService } from './../../services/rental.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {
  currentId: string;
  rentalSelected: Rental;

  constructor(private route: ActivatedRoute, private rentalService: RentalService) {
    // this.rentalSelected = new RentalImpl();
  }

  ngOnInit() {
    this.route.params.subscribe(
      (params) => {
        this.currentId = params['rentalid'];
        this.getRental(this.currentId);
      }
    );
  }

  getRental(rentalId: string) {
    this.rentalService.getRentalById(rentalId)
    .subscribe(
      (data: HttpResponse<Rental>) => {
        this.rentalSelected = data.body;
        console.log(this.rentalSelected);

      }
    );
  }
}
