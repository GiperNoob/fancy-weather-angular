import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Observable } from 'rxjs';
import {
  IMG_URL,
  IP_API_KEY,
  WEATHER_URL,
} from '../../../../constants/keys-constants';
import { ICoordinates, IInform } from '../../../../interfaces/interfaces';
import { map, share } from 'rxjs/operators';
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

  getCoordinates(coordinates: IDataCoordinates): ICoordinates {
    const coordinatesArray = coordinates.loc.split(',');
    const data = {
      lat: Number(coordinatesArray[0]),
      lon: Number(coordinatesArray[1]),
    };
    return data;
  }

  getWeather(): Observable<IWeatherAPI> {
    return this.httpClient.get<IWeatherAPI>(WEATHER_URL);
  }

  getUrlImage(data: IIPUser): string {
    return data.urls.regular;
  }

  getClock(): Observable<Date> {
    return interval(1000).pipe(
      map(() => new Date()),
      share()
    );
  }

  transformWeather(body: IWeatherAPI): IInform {
    console.log(body);
    return {
      weather: {
        temp: body.list[3].main.temp.toFixed(),
        feelsLike: body.list[3].main.feels_like.toFixed(),
        wind: body.list[3].wind.speed,
        humidity: body.list[3].main.humidity,
      },
      coordinates: body.city.coord,
      geoInfo: {
        country: body.city.country,
        city: body.city.name,
      },
    };
  }
}
