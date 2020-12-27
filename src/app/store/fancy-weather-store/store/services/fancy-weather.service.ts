import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {IMG_URL, IP_API_KEY} from '../../../../constants/keys-constants';

@Injectable({
  providedIn: 'root'
})
export class FancyWeatherService {

  constructor(private httpClient: HttpClient) { }

  getSrcImg(): Observable<string> {
    return this.httpClient.get<string>(IMG_URL);
  }

  getIP(): Observable<string> {
    return this.httpClient.get<string>(IP_API_KEY);
  }
}