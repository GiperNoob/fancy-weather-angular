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

@Injectable()
export class FancyWeatherEffects {
  getImgSrc$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getImgAction),
      switchMap(() =>
        this.fancyWeatherService
          .getSrcImg()
          .pipe(
            map((data) =>
              setBackgroundImageAction(
                this.fancyWeatherService.getUrlImage(data)
              )
            )
          )
      )
    )
  );

  getWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getWeatherAction),
      switchMap(() =>
        this.fancyWeatherService
          .getWeather()
          .pipe(
            map((weather) =>
              setWeatherAction(
                this.fancyWeatherService.transformWeather(weather)
              )
            )
          )
      )
    )
  );

  getIP$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getIPAction),
      switchMap(() =>
        this.fancyWeatherService
          .getIP()
          .pipe(
            map((data) =>
              setLatLngAction(this.fancyWeatherService.getCoordinates(data))
            )
          )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private fancyWeatherService: FancyWeatherService
  ) {}
}
