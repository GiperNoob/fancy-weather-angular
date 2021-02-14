import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { share, skip, take } from 'rxjs/operators';
import { IFancyWeatherState } from '../interfaces/interfaces';
import { getCity } from '../store/fancy-weather-store/store/fancy-weather.selectors';

export const MAP_KEY = 'AIzaSyBrOMIEd0am5Qr09_Fb2KiXV2N-EAbPVig';

@Injectable({ providedIn: 'root' })
export class KeysService {
  public IMG_URL =
    'https://api.unsplash.com/photos/random?query=morning&client_id=mVwMzfURXi99QrFhJ_ZJ4hKZ4CKqz8-FcbSQBWkisa0';
  public IP_API_KEY = 'https://ipinfo.io/json?token=c53e5677671c54';
  public WEATHER_URL!: string;
  constructor(private store$: Store<IFancyWeatherState>) {
    this.store$
      .pipe(select(getCity), skip(1))
      .subscribe(
        (city) =>
          (this.WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ua&units=metric&APPID=a9a3a62789de80865407c0452e9d1c27`)
      );
  }
}
