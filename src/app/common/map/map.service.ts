import { GeoLocation } from './../../models/geolocation.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {
  private geoCoder;
  constructor() { }

  public geoCodeLocation(location: string): Observable<GeoLocation> {
    this.geoCoder = new (<any>window).google.maps.GeoCoder();

    return new Observable((observer) => {
      this.geoCoder.getcode({address: location},
        (result, status) => {
          if (status === 'OK') {
            const geometry = result[0].geometry.location;
            const geo: GeoLocation;
            geo.lat = geometry.lat();
            geo.lng = geometry.lng();
            observer.next(geo);
          }
      });
    });
  }
}
