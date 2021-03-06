import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IFancyWeatherState } from '../../interfaces/interfaces';
import {
  getCity,
  getCountry,
  getDateSelector,
} from '../../store/fancy-weather-store/store/fancy-weather.selectors';
import { getClock } from 'src/app/utils/utils';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.scss'],
})
export class InformComponent {
  clock: Observable<Date> = getClock();
  date: Observable<number> = this.store$.pipe(select(getDateSelector));
  country: Observable<string> = this.store$.pipe(select(getCountry));
  city: Observable<string> = this.store$.pipe(select(getCity));

  constructor(private store$: Store<IFancyWeatherState>) {}
}
