import { GeoLocation } from './../../models/geolocation.interface';
import { Component, OnInit, Input } from '@angular/core';
import { MapService } from './map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title = 'My first AGM project';
  @Input() location: string;
  isPositionError = false;
  lat: number; // = 51.678418;
  lng: number; // = 7.809007;

  constructor(private mapsevice: MapService) { }

  ngOnInit() {

  }

  mapReadyHandler() {
    this.mapsevice.getGeoLocation(this.location)
    .subscribe((geoLocation: GeoLocation) => {
      this.lat = +geoLocation.lat;
      this.lng = +geoLocation.lng;
    },
    (error) => {
      console.log(error);
      this.isPositionError = true;
    });
  }

}
