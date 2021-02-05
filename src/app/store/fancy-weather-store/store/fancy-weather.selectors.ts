import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FWA_STORE } from './fancy-weather.reducer';
import {
  ICoordinates,
  IFancyWeatherState,
  IWeatherToday,
} from '../../../interfaces/interfaces';

const GET_FEATURE = createFeatureSelector<IFancyWeatherState>(FWA_STORE);

export const getCoordinates = createSelector(
  GET_FEATURE,
  (state): ICoordinates => state.coordinates
);

export const getSrcSelector = createSelector(
  GET_FEATURE,
  (state): string => state.src
);

export const getLatSelector = createSelector(
  getCoordinates,
  (coordinates) => coordinates.lat
);

export const getLngSelector = createSelector(
  getCoordinates,
  (coordinates) => coordinates.lng
);

export const getDateSelector = createSelector(
  GET_FEATURE,
  (state): number => state.date
);

export const getWeatherTodaySelectore = createSelector(
  GET_FEATURE,
  (state): IWeatherToday => state.weatherToday
);
