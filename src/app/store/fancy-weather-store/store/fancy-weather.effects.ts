import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  changeBackgroundImageAction,
  getRequestForImgAction,
  getRequestForIPAction,
  changeLatLngAction,
} from './fancy-weather.actions';
import {map, switchMap, tap} from 'rxjs/operators';
import { FancyWeatherService } from './services/fancy-weather.service';
import {of} from 'rxjs';

@Injectable()
export class FancyWeatherEffects {
  loadImgSrc$ = createEffect(() => this.actions$.pipe(
      ofType(getRequestForImgAction),
    switchMap(() => this.fancyWeatherService.getSrcImg().pipe(
      // @ts-ignore
      map((data) => changeBackgroundImageAction(data.urls.regular))
    ))
    )
  );

  // @ts-ignore
  loadIP$ = createEffect(() => this.actions$.pipe(
    ofType(getRequestForIPAction),
    switchMap(() => this.fancyWeatherService.getIP().pipe(
      // @ts-ignore
      map((data) => changeLatLngAction(data.loc.split(','))
    )),
   ))
  );

  constructor(
    private actions$: Actions,
    private fancyWeatherService: FancyWeatherService,
    ) {}
}
