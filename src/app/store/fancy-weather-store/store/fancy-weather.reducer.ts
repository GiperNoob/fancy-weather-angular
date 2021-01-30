import { createReducer, on } from '@ngrx/store';
import { setBackgroundImageAction, setLatLngAction } from '../../../components/inform/fancy-weather.actions';
import { IFancyWeatherState } from '../../../interfaces/interfaces';

export const FWA_STORE = 'store';

const FANCY_WEATHER_INIT_STATE: IFancyWeatherState = {
  src: '',
  coordinates: {
    lat: 51.678418,
    lng: 7.809007,
  },
  date: Date.now(),
  weatherToday: {
    temp: 20,
    feelsLike: 30,
    wind: 42,
    humidity: 60,
  }
};

export const fancyWeatherReducer = createReducer(
  FANCY_WEATHER_INIT_STATE,
  on(
    setBackgroundImageAction,
    (state, {src}) => ({...state, src})
  ),
  on(
    setLatLngAction,
    (
      state,
      {coordinates}
    ) =>  ({
      ...state,
      coordinates,
    })
  ),
);
