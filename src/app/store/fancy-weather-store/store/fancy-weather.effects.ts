import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  changeBackgroundImageAction,
  getRequestForImgAction,
  getRequestForIPAction,
  changeLatLngAction,
} from '../../../components/inform/fancy-weather.actions';
import { map, switchMap } from 'rxjs/operators';
import { FancyWeatherService } from './services/fancy-weather.service';

@Injectable()
export class FancyWeatherEffects {
  loadImgSrc$ = createEffect(() => this.actions$.pipe(
      ofType(getRequestForImgAction),
    switchMap(() => this.fancyWeatherService.getSrcImg().pipe(
      map((data) => changeBackgroundImageAction(this.fancyWeatherService.getUrlImage(data)))
    ))
    )
  );

  loadIP$ = createEffect(() => this.actions$.pipe(
    ofType(getRequestForIPAction),
    switchMap(() => this.fancyWeatherService.getIP().pipe(
      map((data) => changeLatLngAction(this.fancyWeatherService.getCoordinates(data))
    )),
   ))
  );

  constructor(
    private actions$: Actions,
    private fancyWeatherService: FancyWeatherService,
    ) {}
}
