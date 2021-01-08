import { createAction } from '@ngrx/store';
import { FancyWeatherActions } from '../../constants/action-constants';
import {ICoordinates} from '../../interfaces/interfaces';

export const changeBackgroundImageAction = createAction(
  FancyWeatherActions.CHANGE_BACKGROUND_IMAGE,
  (src: string) => ({ src })
);

export const getRequestForImgAction = createAction(
  FancyWeatherActions.GET_SRC_IMG_REQUEST_ACTION
);

export const getRequestForIPAction = createAction(
  FancyWeatherActions.GET_IP_REQUEST_ACTION
);

export const changeLatLngAction = createAction(
  FancyWeatherActions.CHANGE_LAT_LNG_ACTION,
  (coordinates: ICoordinates) => ({ coordinates })
);
