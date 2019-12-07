import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  City : string  = '';
  constructor(private weatherApiService: WeatherApiService) {
    this.weatherApiService.cityInHeader.subscribe(
      (cityName : string) => this.City = cityName
    );
   }

  ngOnInit() {

  }

}
