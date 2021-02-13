export interface ICoordinates {
  lat: number;
  lon: number;
}

export interface IInitData {
  geoInfo: IGeoInfo;
  coordinates: ICoordinates;
}

export interface IWeatherToday {
  temp: string;
  feelsLike: string;
  wind: number;
  humidity: number;
}

export interface IGeoInfo {
  country: string;
  city: string;
}

export interface IFancyWeatherState {
  src: string;
  geoInfo: IGeoInfo;
  coordinates: ICoordinates;
  date: number;
  weatherToday: IWeatherToday;
}

export interface IInform {
  weather: IWeatherToday;
  coordinates: ICoordinates;
  geoInfo: IGeoInfo;
}
