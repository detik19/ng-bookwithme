import { RentalComponent } from './rental/rental.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './common/basic-layout/basic-layout.component';


const routes: Routes = [
  {
    path: '',
    component: BasicLayoutComponent,
    children: [
      {
        path: '',
        component: RentalComponent
      }
    ]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

