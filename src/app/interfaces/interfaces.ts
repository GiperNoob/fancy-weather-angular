export interface IDataCoordinates {
  city: string;
  country: string;
  hostname: string;
  ip: string;
  loc: string;
  org: string;
  postal: string;
  region: string;
  timezone: string;
}

export interface IUrls {
  full: string;
  raw: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface IIPUser {
  alt_description: string;
  blur_hash: string;
  categories: [];
  color: string;
  created_at: string;
  current_user_collections: [];
  description: string;
  downloads: number;
  exif: any;
  height: number;
  id: string;
  liked_by_user: boolean;
  likes: number;
  links: any;
  location: any;
  promoted_at: any;
  sponsorship: any;
  updated_at: string;
  urls: IUrls;
  user: any;
  views: number;
  width: number;
}

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IWeatherToday {
  temp: number;
  feelsLike: number;
  wind: number;
  humidity: number;
}

export interface IFancyWeatherState {
  src: string;
  coordinates: ICoordinates;
  date: number;
  weatherToday: IWeatherToday;
}
