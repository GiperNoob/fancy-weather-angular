import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getRequestForImgAction } from './store/fancy-weather-store/store/fancy-weather.actions';
import { Observable } from 'rxjs';
import { GET_SRC_SELECTOR } from './store/fancy-weather-store/store/fancy-weather.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  src$!: Observable<string>;
  backGroundImage!: string;

  constructor(private store$: Store) {}

  ngOnInit(): void {
    this.store$.dispatch(getRequestForImgAction());
    this.src$ = this.store$.pipe(select(GET_SRC_SELECTOR));
    this.src$.subscribe(v => this.backGroundImage = `url(${v})`);
  }
}
