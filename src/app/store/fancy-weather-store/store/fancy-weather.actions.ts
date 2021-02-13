import { createAction } from '@ngrx/store';
import { FancyWeatherActions } from '../../../constants/action-constants';
import { IInform, IInitData } from '../../../interfaces/interfaces';

export const setBackgroundImageAction = createAction(
  FancyWeatherActions.SET_BACKGROUND_IMAGE,
  (src: string) => ({ src })
);

export const getImgAction = createAction(
  FancyWeatherActions.GET_SRC_IMG_ACTION
);

export const getIPDataAction = createAction(
  FancyWeatherActions.GET_IP_DATA_ACTION
);

export const setCoordinatesAndIPAction = createAction(
  FancyWeatherActions.SET_INIT_DATA_ACTION,
  (initData: IInitData) => ({ initData })
);

export const getWeatherAction = createAction(
  FancyWeatherActions.GET_WEATHER_ACTION
);

export const setWeatherAction = createAction(
  FancyWeatherActions.SET_WEATHER_ACTION,
  (inform: IInform) => ({ inform })
);
