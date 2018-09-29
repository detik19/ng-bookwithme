import { AuthGuard } from './../guard/auth.guard';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalComponent } from './rental.component';


const routes: Routes = [
  {
    path: 'rentals', component: RentalComponent,
    children: [
      {
        path: '', component: RentalListComponent,
      },
      {
        path: ':rentalid',
        component: RentalDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RentalRoutingModule { }
