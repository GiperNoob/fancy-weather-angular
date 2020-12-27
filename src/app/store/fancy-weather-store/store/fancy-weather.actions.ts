import { createAction } from '@ngrx/store';
import { FancyWeatherActions } from '../../../constants/action-constants';

export const changeBackgroundImageAction = createAction(
  FancyWeatherActions.CHANGE_BACKGROUND_IMAGE,
  (src: string) => ({ src })
);

export const getRequestForImgAction = createAction(
  FancyWeatherActions.GET_SRC_IMG_REQUEST_ACTION
);
