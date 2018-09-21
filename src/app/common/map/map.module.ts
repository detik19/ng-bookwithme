import { environment } from './../../../environments/environment';
import { MapService } from './map.service';
import { MapComponent } from './map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: environment.google.map
    })
  ],
  exports: [
    MapComponent
  ],
  providers: [MapService],
  declarations: [MapComponent]
})
export class MapModule { }
