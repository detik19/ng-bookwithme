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
        loadChildren: './rental/rental.module#RentalModule'
      },
      {
        path: '',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
 },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

