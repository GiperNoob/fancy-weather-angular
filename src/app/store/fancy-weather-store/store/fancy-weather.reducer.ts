import { createReducer, on } from '@ngrx/store';
import {
  setBackgroundImageAction,
  setCitySearchAction,
  setInitDataAction,
  setWeatherAction,
} from './fancy-weather.actions';
import { IFancyWeatherState } from '../../../interfaces/interfaces';

export const FWA_STORE = 'store';

const FANCY_WEATHER_INIT_STATE: IFancyWeatherState = {
  src: '',
  geoInfo: {
    country: '',
    city: '',
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
  on(setInitDataAction, (state, { initData }) => ({
    ...state,
    coordinates: initData.coordinates,
    geoInfo: initData.geoInfo,
  })),
  on(setWeatherAction, (state, { inform }) => {
    if (inform.coordinates && inform.geoInfo && inform.weather) {
      return {
        ...state,
        weatherToday: inform.weather,
        geoInfo: inform.geoInfo,
        coordinates: inform.coordinates,
      };
    } else {
      return { ...state };
    }
  }),
  on(setCitySearchAction, (state, { city }) => ({
    ...state,
    geoInfo: { ...state.geoInfo, city },
  }))
);
