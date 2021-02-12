import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  IMG_URL,
  IP_API_KEY,
  WEATHER_URL,
} from '../../../../constants/keys-constants';
import { IWeatherAPI } from 'src/app/interfaces/weatherAPI.interfaces';
import { IIPUser, IDataCoordinates } from 'src/app/interfaces/data.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FancyWeatherService {
  constructor(private httpClient: HttpClient) {}

  getSrcImg(): Observable<IIPUser> {
    return this.httpClient.get<IIPUser>(IMG_URL);
  }

  getIP(): Observable<IDataCoordinates> {
    return this.httpClient.get<IDataCoordinates>(IP_API_KEY);
  }

  getWeather(): Observable<IWeatherAPI> {
    return this.httpClient.get<IWeatherAPI>(WEATHER_URL);
  }
}
