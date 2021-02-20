import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { KeysService } from '../../../../constants/keys-constants.service';
import { IWeatherAPI } from 'src/app/interfaces/weatherAPI.interfaces';
import { IDataImage, IDataIpUser } from 'src/app/interfaces/data.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FancyWeatherService {
  public errorMessage = new BehaviorSubject<string>('');
  constructor(
    private httpClient: HttpClient,
    private keysService: KeysService
  ) {}

  getSrcImg(): Observable<IDataImage> {
    return this.httpClient.get<IDataImage>(this.keysService.IMG_URL);
  }

  getIP(): Observable<IDataIpUser> {
    return this.httpClient.get<IDataIpUser>(this.keysService.IP_API_KEY);
  }

  getWeather(): Observable<IWeatherAPI> {
    return this.httpClient.get<IWeatherAPI>(this.keysService.WEATHER_URL);
  }
}
