import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FWA_STORE, ICoordinates, IFancyWeatherState} from './fancy-weather.reducer';

const GET_FEATURE = createFeatureSelector<IFancyWeatherState>(FWA_STORE);

export const GET_SRC_SELECTOR = createSelector(
  GET_FEATURE,
  (state): string => state.src
);

export const GET_LAT_LNG_SELECTOR = createSelector(
  GET_FEATURE,
  (state): ICoordinates => state.coordinates
);
