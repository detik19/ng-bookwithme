import { GeoLocationModel } from './../../models/geolocation.model';
import { GeoLocation } from './../../models/geolocation.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {
  private geoCoder;
  constructor() { }

  public geoCodeLocation(location: string): Observable<GeoLocation> {
    this.geoCoder = new (<any>window).google.maps.Geocoder();

    return new Observable((observer) => {
      this.geoCoder.geocode({address: location},
        (result, status) => {
          if (status === 'OK') {
            const geometry = result[0].geometry.location;
            const geo: GeoLocation = new GeoLocationModel();
            geo.lat = geometry.lat();
            geo.lng = geometry.lng();
            observer.next(geo);
          } else {
            observer.error('Location could not be geocoded');
          }
      });
    });
  }
}

