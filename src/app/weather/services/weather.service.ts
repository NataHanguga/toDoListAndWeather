import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Weather } from '../models/weather';
import { Forecast } from '../models/forecast';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private readonly key: string = 'bed280837ad6478c885152854192305';
  public link: string = 'https://api.apixu.com/v1/';
 //                      https://api.apixu.com/v1/search.json?key=bed280837ad6478c885152854192305&q=lond
  constructor(private http: HttpClient) { }

  public getWeather(cityName: string, day: number): Observable<Weather> {
    return this.http
      .get<Weather>(`${this.link}forecast.json?key=${this.key}&q=${cityName}&days=${day}`);
  }

  public customWeatherByToday(data) {
    return new Weather(
      data.location.name,
      data.current.temp_c,
      data.current.condition.icon,
      data.current.condition.text);
  }

  public customWeatherBySomeDays(data) {
    let forecast: Forecast[] = [];
    for (let i = 0; i < data.forecast.forecastday.length; i++) {
      const forecastWeather = new Forecast(
        data.location.name,
        data.forecast.forecastday[i].day.condition.text,
        data.forecast.forecastday[i].day.avgtemp_c,
        data.forecast.forecastday[i].day.maxtemp_c,
        data.forecast.forecastday[i].day.mintemp_c,
        data.forecast.forecastday[i].date,
        data.forecast.forecastday[i].day.condition.icon
      );
      forecast.push(forecastWeather);
    }
    return forecast;
  }

  public customCityName(data) {
    let city: City[] = [];
    for (let i = 0; i < data.length; i++) {
      const forecastWeather = new City(
        data[i].name,
        data[i].lat,
        data[i].lon
      );
      city.push(forecastWeather);
    }
    return city;
  }
  public searchCity(cityName): Observable<any> {
    return this.http.get(`${this.link}search.json?key=${this.key}&q=${cityName}`);
  }

  public setCityToLocalStorage(city: string): void{
    localStorage.setItem('city', city);
  }

  public getCityFromLocalStorage(): string{
    let city = localStorage.getItem('city');
    if (city === null){
      return 'Cherkasy';
    }
    return city;
  }
}
