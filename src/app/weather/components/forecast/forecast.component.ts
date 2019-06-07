import { Component, OnInit } from '@angular/core';
import { Forecast } from '../../models/forecast';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  public forecast: Forecast[] = [];
  public city: string = this.weatherService.getCityFromLocalStorage();

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.someDaysWeather(5);
  }

  public someDaysWeather(days) {
    this.weatherService.getWeather(this.city, days).subscribe(
      (data) => {
        this.forecast = this.weatherService.customWeatherBySomeDays(data);
        console.log(data, this.forecast);
      }
    );
  }
}
