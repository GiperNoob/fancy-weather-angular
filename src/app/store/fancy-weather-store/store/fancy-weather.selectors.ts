import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FWA_STORE, IFancyWeatherState} from './fancy-weather.reducer';

const GET_FEATURE = createFeatureSelector<IFancyWeatherState>(FWA_STORE);

export const GET_SRC_SELECTOR = createSelector(
  GET_FEATURE,
  (state): string => state.src
);
