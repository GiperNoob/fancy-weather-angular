import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { IWeatherToday } from 'src/app/interfaces/interfaces';
import { getWeatherTodaySelectore } from 'src/app/store/fancy-weather-store/store/fancy-weather.selectors';
import { getWeatherAction } from '../../store/fancy-weather-store/store/fancy-weather.actions';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit, OnDestroy {
  weatherToday: Observable<IWeatherToday> = this.store$.pipe(
    select(getWeatherTodaySelectore)
  );
  temp!: string;
  feelsLike!: string;
  wind!: number;
  humidity!: number;
  subscription!: Subscription;

  constructor(private store$: Store) {}
  ngOnInit(): void {
    this.store$.dispatch(getWeatherAction());

    this.subscription = this.weatherToday.subscribe((weather) => {
      this.temp = weather.temp;
      this.feelsLike = weather.feelsLike;
      this.wind = weather.wind;
      this.humidity = weather.humidity;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe;
  }
}
