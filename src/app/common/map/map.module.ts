import { MapComponent } from './map.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC9qS8frAJVqMjW3CQpSXrK3-hK87nLCW4'
    })
  ],
  exports: [
    MapComponent
  ],
  declarations: [MapComponent]
})
export class MapModule { }
