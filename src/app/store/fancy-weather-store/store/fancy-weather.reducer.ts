import {createReducer, on} from '@ngrx/store';
import {changeBackgroundImageAction} from './fancy-weather.actions';

export const FWA_STORE = 'store';

export interface IFancyWeatherState {
  src: string;
}

const FANCY_WEATHER_INIT_STATE: IFancyWeatherState = {
  src: ''
};

export const fancyWeatherReducer = createReducer(
  FANCY_WEATHER_INIT_STATE,
  on(
    changeBackgroundImageAction,
    (state, {src}) => ({...state, src})
  ),
);
