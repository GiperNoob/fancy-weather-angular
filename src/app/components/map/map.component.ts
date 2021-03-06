import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCoordinates } from '../../store/fancy-weather-store/store/fancy-weather.selectors';
import { ICoordinates } from '../../interfaces/interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit, OnDestroy {
  coordinates$: Observable<ICoordinates> = this.store$.pipe(
    select(getCoordinates)
  );
  lat!: number;
  lon!: number;
  subscription!: Subscription;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.subscription = this.coordinates$.subscribe((coordinates) => {
      this.lat = coordinates.lat;
      this.lon = coordinates.lon;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
