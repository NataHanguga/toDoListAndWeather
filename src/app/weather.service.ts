import { Injectable } from '@angular/core';

import { CurrentWeather } from '../app/components/weathr/current-weather';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  key = 'ce970465ba6701e66dc1eada03ea8fbd';
  cityName: 'Kyiv';
  weatherClass: CurrentWeather;
  current: CurrentWeather = new CurrentWeather(this.cityName, '22', '//cdn.apixu.com/weather/64x64/day/113.png', 'sunny');

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get('https://restcountries.eu/rest/v2/all');

  }


  public weatherNow() {
    return this.current;
  }

  public getWeather(cityName: string): Observable<any> {
    // const key: 'ce970465ba6701e66dc1eada03ea8fbd';
    const url = `https://api.apixu.com/v1/forecast.json?key=bed280837ad6478c885152854192305&q=${cityName}&days=1`;

    return this.http
      .get(url).pipe(
        map(res => res));
  }

  public getForecast(cityName: string, days: number): Observable<any> {
    const url = `https://api.apixu.com/v1/forecast.json?key=bed280837ad6478c885152854192305&q=${cityName}&days=${days}`;
    return this.http
      .get(url)
      .pipe(
        map(res => res));
  }

}
