import { RentalComponent } from './rental.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalRoutingModule } from './rental-routing.module';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalService } from '../services/rental.service';

@NgModule({
  imports: [
    CommonModule,
    RentalRoutingModule
  ],
  providers: [RentalService],
  declarations: [RentalListComponent, RentalComponent, RentalListItemComponent]
})
export class RentalModule { }
