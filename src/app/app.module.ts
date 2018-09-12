import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { RouterModule } from '@angular/router';
import { BasicLayoutComponent } from './common/basic-layout/basic-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BasicLayoutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
