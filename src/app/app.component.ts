import { Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getImgAction } from './store/fancy-weather-store/store/fancy-weather.actions';
import { Observable, Subscription } from 'rxjs';
import { getSrcSelector } from './store/fancy-weather-store/store/fancy-weather.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  src$!: Observable<string>;
  backGroundImage!: string;
  subscription!: Subscription;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(getImgAction());
    this.src$ = this.store$.pipe(select(getSrcSelector));
    this.subscription = this.src$.subscribe(
      (src) => (this.backGroundImage = `url(${src})`)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
