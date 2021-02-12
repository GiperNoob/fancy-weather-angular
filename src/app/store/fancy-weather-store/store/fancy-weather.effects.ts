import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  setBackgroundImageAction,
  getImgAction,
  getIPAction,
  setLatLngAction,
  getWeatherAction,
  setWeatherAction,
} from './fancy-weather.actions';
import { map, switchMap } from 'rxjs/operators';
import { FancyWeatherService } from './services/fancy-weather.service';
import {
  getCoordinates,
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
      ofType(getIPAction),
      switchMap(() =>
        this.fancyWeatherService
          .getIP()
          .pipe(map((data) => setLatLngAction(getCoordinates(data))))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private fancyWeatherService: FancyWeatherService
  ) {}
}
