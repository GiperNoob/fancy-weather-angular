import { ICoordinates } from './interfaces';

export interface IWeatherAPI {
  cod: string;
  message: number;
  cnt: number;
  list: IWeatherInfo[];
  city: ICity;
}

export interface IWeatherInfo {
  dt: number;
  main: IWeatherMain;
  weather: IWeather[];
  clouds: IClouds;
  wind: IWind;
  visibility: number;
  pop: number;
  sys: ISys;
  dt_txt: string;
}

export interface ICity {
  id: number;
  name: 'Vitebsk';
  coord: ICoordinates;
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface IWeatherMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IClouds {
  all: string;
}

export interface IWind {
  speed: number;
  deg: number;
}

export interface ISys {
  pod: string;
}
