import { Observable, interval } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { IDataIpUser, IDataImage } from '../interfaces/data.interfaces';
import { IInform, IInitData } from '../interfaces/interfaces';
import { IWeatherAPI } from '../interfaces/weatherAPI.interfaces';

export function getInitData(dataIP: IDataIpUser): IInitData {
  const coordinatesArray = dataIP.loc.split(',');
  const initData = {
    geoInfo: {
      country: dataIP.country,
      city: dataIP.city,
    },
    coordinates: {
      lat: Number(coordinatesArray[0]),
      lon: Number(coordinatesArray[1]),
    },
  };
  return initData;
}

export function getUrlImage(data: IDataImage): string {
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
