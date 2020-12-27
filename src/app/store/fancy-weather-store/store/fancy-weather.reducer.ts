import {createReducer, on} from '@ngrx/store';
import {changeBackgroundImageAction, changeLatLngAction} from './fancy-weather.actions';

export const FWA_STORE = 'store';

export interface ICoordinates {
  lat: number;
  lng: number;
}

export interface IFancyWeatherState {
  src: string;
  coordinates: ICoordinates;
}

const FANCY_WEATHER_INIT_STATE: IFancyWeatherState = {
  src: '',
  coordinates: {
    lat: 51.678418,
    lng: 7.809007,
  }
};

export const fancyWeatherReducer = createReducer(
  FANCY_WEATHER_INIT_STATE,
  on(
    changeBackgroundImageAction,
    (state, {src}) => ({...state, src})
  ),
  on(
    changeLatLngAction,
    (
      state,
      data
    ) =>  ({
      ...state,
      coordinates: {
        lat: data.coordinates[0],
        lng: data.coordinates[1],
      }
    })
  ),
);
