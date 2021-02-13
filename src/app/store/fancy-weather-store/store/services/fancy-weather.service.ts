import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IMG_URL,
  IP_API_KEY,
  WEATHER_URL,
} from '../../../../constants/keys-constants';
import { IWeatherAPI } from 'src/app/interfaces/weatherAPI.interfaces';
import { IDataImage, IDataIpUser } from 'src/app/interfaces/data.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FancyWeatherService {
  constructor(private httpClient: HttpClient) {}

  getSrcImg(): Observable<IDataImage> {
    return this.httpClient.get<IDataImage>(IMG_URL);
  }

  getIP(): Observable<IDataIpUser> {
    return this.httpClient.get<IDataIpUser>(IP_API_KEY);
  }

  getWeather(): Observable<IWeatherAPI> {
    return this.httpClient.get<IWeatherAPI>(WEATHER_URL);
  }
}
