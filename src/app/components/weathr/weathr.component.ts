import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/weather.service';
import { CurrentWeather } from './current-weather';
import { CurrentForecast } from './current-forecast';

@Component({
  selector: 'app-weathr',
  templateUrl: './weathr.component.html',
  styleUrls: ['./weathr.component.css']
})
export class WeathrComponent implements OnInit {
  capitals = [];
  selectedCity;
  cardCity;
  showNote = false;
  search = true;
  customWeather: any;
  startCity: any;
  forecast: CurrentForecast[] = [];
  constructor(private service: WeatherService) { }

  ngOnInit() {
    this.service.getCities().subscribe(
      (countries: Array<any>) => {
        countries.forEach((country: any) => {
          if (country.capital.length) {
            this.capitals.push(country.capital);
          }
        });
        this.capitals.sort();
      }
    );

    localStorage.getItem('city') === null ? this.startCity = 'Romma' : this.startCity = localStorage.getItem('city');
    this.weatherInCity(this.startCity);
    console.log(this.startCity);
    this.simpleForecast();
  }

  // get list of cities in search
  selectCity(city) {
    console.log(city);
    if (this.capitals.includes(city)) {
      this.cardCity = city;
      this.showNote = false;
    } else if (city.leading > 0) {
      this.showNote = true;
    }
  }

  //get forecast by today
  weatherInCity(cityName: string) {
    this.service.getWeather(cityName).subscribe(
      (data) => {
        this.customWeather = new CurrentWeather(data.location.name,
          (data.current.temp_c).toFixed(0),
          data.current.condition.icon,
          data.current.condition.text
        );
      }
    );
  }

  // get forecast by 3 days
  simpleForecast() {
    this.forecast.splice(0, this.forecast.length); // clean array for new weather
    this.service.getForecast(localStorage.getItem('city'), 3).subscribe(
      (data) => {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < data.forecast.forecastday.length; i++) {
          const forecastWeather = new CurrentForecast(
            data.location.name,
            data.forecast.forecastday[i].day.condition.text,
            (data.forecast.forecastday[i].day.avgtemp_c).toFixed(0),
            data.forecast.forecastday[i].day.maxtemp_c,
            data.forecast.forecastday[i].day.mintemp_c,
            data.forecast.forecastday[i].date,
            data.forecast.forecastday[i].day.condition.icon
          );
          this.forecast.push(forecastWeather);
        }
      }
    );
  }

  // get city from input#input or London
  searchCity(city) {
    console.log(city);
    this.showNote = true;
    localStorage.setItem('city', city);
    const cityName = (city.length === 0 ? 'London' : city);
    this.weatherInCity(cityName);

  }

}
