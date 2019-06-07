import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from './components/weather/weather.component';
import { TodayForecastComponent } from './components/today-forecast/today-forecast.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { SearchCityComponent } from './components/search-city/search-city.component';

const routes: Routes = [
  {
    path: 'weather', component: WeatherComponent,
    children: [
      {
        path: '**',
        redirectTo: 'weather'
      },
      {
        path: '',
        // redirectTo: 'weather'
        component: TodayForecastComponent
      },
      {
        path: 'forecast',
        component: ForecastComponent
      },
      {
        path: 'search',
        component: SearchCityComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
