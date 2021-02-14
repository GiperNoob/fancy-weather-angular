import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Subscription } from 'rxjs';
import { IFancyWeatherState } from 'src/app/interfaces/interfaces';
import { setCitySearchAction } from 'src/app/store/fancy-weather-store/store/fancy-weather.actions';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public isValid = new BehaviorSubject<boolean>(true);
  private subscription!: Subscription;

  constructor(private store$: Store<IFancyWeatherState>) {}

  ngOnInit(): void {
    this.createForm();
    this.subscription = this.form.valueChanges.subscribe(() => {
      if (this.form.get('searchField')?.value.length >= 2) {
        this.isValid.next(false);
      }
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public onSubmit(): void {
    const city = this.form.value.searchField;
    this.store$.dispatch(setCitySearchAction(city));
    this.isValid.next(true);
  }

  private createForm(): void {
    this.form = new FormGroup({
      searchField: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
  }
}
