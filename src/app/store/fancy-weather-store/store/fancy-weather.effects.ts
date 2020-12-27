import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {changeBackgroundImageAction, getRequestForImgAction} from './fancy-weather.actions';
import {map, switchMap} from 'rxjs/operators';
import {FancyWeatherService} from './services/fancy-weather.service';

@Injectable()
export class FancyWeatherEffects {
  loadImgSrc$ = createEffect(() => this.actions$.pipe(
      ofType(getRequestForImgAction),
    switchMap(() => this.fancyWeatherService.getSrcImg().pipe(
      // @ts-ignore
      map(data => changeBackgroundImageAction(data.urls.regular))
    ))
    )
  );

  constructor(
    private actions$: Actions,
    private fancyWeatherService: FancyWeatherService,
    ) {}
}
