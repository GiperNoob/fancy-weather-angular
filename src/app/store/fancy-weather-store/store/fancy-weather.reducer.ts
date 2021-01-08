import {createReducer, on} from '@ngrx/store';
import {changeBackgroundImageAction, changeLatLngAction} from '../../../components/inform/fancy-weather.actions';
import { IFancyWeatherState } from '../../../interfaces/interfaces';

export const FWA_STORE = 'store';

const FANCY_WEATHER_INIT_STATE: IFancyWeatherState = {
  src: '',
  coordinates: {
    lat: 51.678418,
    lng: 7.809007,
  },
  date: Date.now(),
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
      {coordinates}
    ) =>  ({
      ...state,
      coordinates,
    })
  ),
);
