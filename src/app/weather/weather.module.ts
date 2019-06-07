import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './components/weather/weather.component';
import { TodayForecastComponent } from './components/today-forecast/today-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { ForecastComponent } from './components/forecast/forecast.component';
// import { SesarchCityComponent } from './components/sesarch-city/sesarch-city.component';
import { SearchCityComponent } from './components/search-city/search-city.component';
// import { IconsModule } from 'angular-bootstrap-md';
@NgModule({
  declarations: [
    WeatherComponent,
    TodayForecastComponent,
    ForecastComponent,
    // SesarchCityComponent,
    SearchCityComponent
  ],
  imports: [
    CommonModule,
    WeatherRoutingModule,
    HttpClientModule,
    // IconsModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class WeatherModule { }
