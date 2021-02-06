import { createReducer, on } from '@ngrx/store';
import {
  setBackgroundImageAction,
  setLatLngAction,
  setWeatherAction,
} from './fancy-weather.actions';
import { IFancyWeatherState } from '../../../interfaces/interfaces';

export const FWA_STORE = 'store';

const FANCY_WEATHER_INIT_STATE: IFancyWeatherState = {
  src: '',
  geoInfo: {
    country: 'BY',
    city: 'Vitebsk',
  },
  coordinates: {
    lat: 51.678418,
    lon: 7.809007,
  },
  date: Date.now(),
  weatherToday: {
    temp: '20',
    feelsLike: '30',
    wind: 42,
    humidity: 60,
  },
};

export const fancyWeatherReducer = createReducer(
  FANCY_WEATHER_INIT_STATE,
  on(setBackgroundImageAction, (state, { src }) => ({ ...state, src })),
  on(setLatLngAction, (state, { coordinates }) => ({ ...state, coordinates })),
  on(setWeatherAction, (state, { inform }) => ({
    ...state,
    weatherToday: inform.weather,
    geoInfo: inform.geoInfo,
    coordinates: inform.coordinates,
  }))
);
