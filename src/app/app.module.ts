import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {DEFAULT_ROUTER_FEATURENAME, routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store';
import { WrapperComponent } from './components/wrapper/wrapper.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { FormComponent } from './components/form/form.component';
import { InformComponent } from './components/inform/inform.component';
import { WeatherComponent } from './components/weather/weather.component';
import { MapComponent } from './components/map/map.component';
import { DaysComponent } from './components/days/days.component';
import { DegreesComponent } from './components/degrees/degrees.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { FancyWeatherStoreModule } from './store/fancy-weather-store/fancy-weather-store.module';
import { MAP_KEY } from './constants/keys-constants';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    ButtonsComponent,
    FormComponent,
    InformComponent,
    WeatherComponent,
    MapComponent,
    DaysComponent,
    DegreesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      [DEFAULT_ROUTER_FEATURENAME]: routerReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: MAP_KEY
    }),
    FancyWeatherStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
