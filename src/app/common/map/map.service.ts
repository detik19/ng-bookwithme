import {
  GeoLocationModel
} from './../../models/geolocation.model';
import {
  GeoLocation
} from './../../models/geolocation.interface';
import {
  Injectable
} from '@angular/core';
import {
  Observable, of
} from 'rxjs';
import {
  CamelizePipe
} from 'ngx-pipes';

@Injectable()
export class MapService {
  private geoCoder;
  private locationCache: any ;
  constructor(private camelizePipe: CamelizePipe) {
    this.locationCache = {};
  }

  private camelize(value: string): string {
    return this.camelizePipe.transform(value);
  }
  private cacheLocation(location: string, coordinates: GeoLocation) {
    this.locationCache[this.camelize(location)] = coordinates;

  }
  private isLocationCached(location: string): boolean {
    return this.locationCache[this.camelize(location)];
  }

  private geoCodeLocation(location: string): Observable < GeoLocation > {
    return new Observable((observer) => {
    if (!this.geoCoder) {
      this.geoCoder = new( < any > window).google.maps.Geocoder();
    }

    this.geoCoder.geocode({
        address: location
      },
      (result, status) => {
        if (status === 'OK') {
          const geometry = result[0].geometry.location;
          const geo: GeoLocation = new GeoLocationModel();
          geo.lat = geometry.lat();
          geo.lng = geometry.lng();

          this.cacheLocation(location, geo);
          observer.next(geo);
        } else {
          observer.error('Location could not be geocoded');
        }
      });
    });

  }


  public getGeoLocation(location: string): Observable < GeoLocation > {

      if (this.isLocationCached(location)) {
        console.log(this.locationCache[this.camelize(location)]);
        return of(this.locationCache[this.camelize(location)]);
      } else {
        return this.geoCodeLocation(location);
      }
  }
}
