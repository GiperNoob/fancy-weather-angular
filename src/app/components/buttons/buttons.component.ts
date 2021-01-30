import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {getImgAction} from '../inform/fancy-weather.actions';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
  constructor(private store$: Store) {
  }

  refreshBackGroundImg(): void {
    this.store$.dispatch(getImgAction());
  }
}
