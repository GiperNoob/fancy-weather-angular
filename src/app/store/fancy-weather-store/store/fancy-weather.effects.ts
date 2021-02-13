import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  setBackgroundImageAction,
  getImgAction,
  getIPDataAction,
  setCoordinatesAndIPAction,
  getWeatherAction,
  setWeatherAction,
} from './fancy-weather.actions';
import { map, switchMap } from 'rxjs/operators';
import { FancyWeatherService } from './services/fancy-weather.service';
import {
  getInitData,
  getUrlImage,
  transformWeather,
} from 'src/app/utils/utils';

@Injectable()
export class FancyWeatherEffects {
  getImgSrc$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getImgAction),
      switchMap(() =>
        this.fancyWeatherService
          .getSrcImg()
          .pipe(map((data) => setBackgroundImageAction(getUrlImage(data))))
      )
    )
  );

  getWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWeatherAction),
      switchMap(() =>
        this.fancyWeatherService
          .getWeather()
          .pipe(map((weather) => setWeatherAction(transformWeather(weather))))
      )
    )
  );

  getIP$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getIPDataAction),
      switchMap(() =>
        this.fancyWeatherService
          .getIP()
          .pipe(map((data) => setCoordinatesAndIPAction(getInitData(data))))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private fancyWeatherService: FancyWeatherService
  ) {}
}
