import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import {
  getLatSelector,
  getLngSelector,
} from '../../store/fancy-weather-store/store/fancy-weather.selectors';

@Component({
  selector: 'app-degrees',
  templateUrl: './degrees.component.html',
  styleUrls: ['./degrees.component.scss'],
})
export class DegreesComponent {
  lat: Observable<number> = this.store$.pipe(select(getLatSelector));
  lng: Observable<number> = this.store$.pipe(select(getLngSelector));

  constructor(private store$: Store) {}
}
