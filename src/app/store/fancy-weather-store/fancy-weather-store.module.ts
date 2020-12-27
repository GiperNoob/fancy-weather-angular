import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule} from '@ngrx/store';
import { fancyWeatherReducer, FWA_STORE } from './store/fancy-weather.reducer';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { FancyWeatherEffects } from './store/fancy-weather.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(FWA_STORE, fancyWeatherReducer),
    EffectsModule.forFeature([FancyWeatherEffects])
  ]
})
export class FancyWeatherStoreModule { }
