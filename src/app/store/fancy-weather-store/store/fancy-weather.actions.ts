import { createAction } from '@ngrx/store';
import { FancyWeatherActions } from '../../../constants/action-constants';
import { ICoordinates, IInform } from '../../../interfaces/interfaces';

export const setBackgroundImageAction = createAction(
  FancyWeatherActions.SET_BACKGROUND_IMAGE,
  (src: string) => ({ src })
);

export const getImgAction = createAction(
  FancyWeatherActions.GET_SRC_IMG_ACTION
);

export const getIPAction = createAction(FancyWeatherActions.GET_IP_ACTION);

export const setLatLngAction = createAction(
  FancyWeatherActions.SET_LAT_LNG_ACTION,
  (coordinates: ICoordinates) => ({ coordinates })
);

export const getWeatherAction = createAction(
  FancyWeatherActions.GET_WEATHER_ACTION
);

export const setWeatherAction = createAction(
  FancyWeatherActions.SET_WEATHER_ACTION,
  (inform: IInform) => ({ inform })
);
