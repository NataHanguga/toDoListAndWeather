import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { Weather } from '../../models/weather';
import { Forecast } from '../../models/forecast';

@Component({
  selector: 'app-today-forecast',
  templateUrl: './today-forecast.component.html',
  styleUrls: ['./today-forecast.component.scss']
})
export class TodayForecastComponent implements OnInit {

  public weatherData: Weather;
  public forecast: Forecast[];
  public previewForecast: Forecast[];
  public city: string = this.weatherService.getCityFromLocalStorage();
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.findMe();
    this.todayWeather();
    this.someDaysWeather(3);
    console.log(123, this.forecast, this.weatherService.getCityFromLocalStorage());


  }

  public todayWeather() {
    this.weatherService.getWeather(this.city, 1).subscribe(
      (data) => {
        this.weatherData = this.weatherService.customWeatherByToday(data);
        console.log(data, this.weatherData);
        
      }
    );
  }

  public someDaysWeather(days) {
    this.weatherService.getWeather(this.city, days).subscribe(
      (data) => {
        this.forecast = this.weatherService.customWeatherBySomeDays(data);
        console.log(data, this.forecast);
      }
    );
  }


public findMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      // this.showPosition(position);
      console.log(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}
}
