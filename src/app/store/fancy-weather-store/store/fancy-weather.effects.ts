import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  setBackgroundImageAction,
  getImgAction,
  getIPDataAction,
  setInitDataAction,
  getWeatherAction,
  setWeatherAction,
  setCitySearchAction,
} from './fancy-weather.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { FancyWeatherService } from './services/fancy-weather.service';
import {
  getInitData,
  getUrlImage,
  transformWeather,
} from 'src/app/utils/utils';
import { of } from 'rxjs';
import { IWeatherAPI } from 'src/app/interfaces/weatherAPI.interfaces';

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
        this.fancyWeatherService.getWeather().pipe(
          catchError((err) => {
            this.fancyWeatherService.errorMessage.next(err.error.message);
            return of({} as IWeatherAPI);
          }),
          map((weather) => setWeatherAction(transformWeather(weather)))
        )
      )
    )
  );

  getIP$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getIPDataAction),
      switchMap(() =>
        this.fancyWeatherService
          .getIP()
          .pipe(map((data) => setInitDataAction(getInitData(data))))
      )
    )
  );

  getWeatherAfterInitData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setInitDataAction),
      switchMap(async () => getWeatherAction())
    )
  );

  getWeatherAfterSearch$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setCitySearchAction),
      switchMap(async () => {
        if (this.fancyWeatherService.errorMessage.getValue()) {
          this.fancyWeatherService.errorMessage.next('');
        }
        return getWeatherAction();
      })
    )
  );

  constructor(
    private actions$: Actions,
    private fancyWeatherService: FancyWeatherService
  ) {}
}
