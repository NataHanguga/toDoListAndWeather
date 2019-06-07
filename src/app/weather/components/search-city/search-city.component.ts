import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';
import { City } from '../../models/city';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-city',
  templateUrl: './search-city.component.html',
  styleUrls: ['./search-city.component.scss']
})
export class SearchCityComponent implements OnInit {
  public cityList: City[] = [];
  public cityName: string = '';
  constructor(private weatherService: WeatherService, private router: Router) { }

  ngOnInit() {
    // this.searchCity('Cherk');
  }

  public searchCity(city: string): void {
    console.log(city);
    this.weatherService.searchCity(city).subscribe(
      data => {
        this.cityList = this.weatherService.customCityName(data);
        // console.log(data, this.cityList);
      
      }
    )
  }

  public chooseCity(city) {
    console.log(city);
    this.weatherService.setCityToLocalStorage(city);
    this.router.navigateByUrl('/weather');
  }



}
