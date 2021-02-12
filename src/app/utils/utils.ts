import { Observable, interval } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { IDataCoordinates, IIPUser } from '../interfaces/data.interfaces';
import { ICoordinates, IInform } from '../interfaces/interfaces';
import { IWeatherAPI } from '../interfaces/weatherAPI.interfaces';

export function getCoordinates(coordinates: IDataCoordinates): ICoordinates {
  const city = coordinates.city;
  const coordinatesArray = coordinates.loc.split(',');
  const data = {
    city,
    lat: Number(coordinatesArray[0]),
    lon: Number(coordinatesArray[1]),
  };
  return data;
}

export function getUrlImage(data: IIPUser): string {
  return data.urls.regular;
}

export function getClock(): Observable<Date> {
  return interval(1000).pipe(
    map(() => new Date()),
    share()
  );
}

export function transformWeather(body: IWeatherAPI): IInform {
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
