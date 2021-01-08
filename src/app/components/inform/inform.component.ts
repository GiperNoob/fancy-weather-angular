import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { IFancyWeatherState } from '../../interfaces/interfaces';
import { getDateSelector } from '../../store/fancy-weather-store/store/fancy-weather.selectors';
import { FancyWeatherService } from '../../store/fancy-weather-store/store/services/fancy-weather.service';

@Component({
  selector: 'app-inform',
  templateUrl: './inform.component.html',
  styleUrls: ['./inform.component.scss']
})
export class InformComponent {
  clock: Observable<Date> = this.fancyWeatherService.getClock();
  date: Observable<number> = this.store$.pipe(select(getDateSelector));

  constructor(
    private store$: Store<IFancyWeatherState>,
    private fancyWeatherService: FancyWeatherService,
  ) {}
}
