import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../../services/weather-api.service';
import {WeatherContext, IWeatherContext} from '../../../interfaces/weather-context';


@Component({
  selector: 'app-main-response',
  templateUrl: './main-response.component.html',
  styleUrls: ['./main-response.component.scss']
})
export class MainResponseComponent implements OnInit {

  mainForecast : string = "Snow";
  tempreC: string = '1.2';
  temperF: string = '32';
  cityName : string = "Lviv";
  countryName: string = "UA";
  humidity: number = 90;
  windSpeed: number = 5;
  pressure: number = 1024;
  test: IWeatherContext;


  constructor(private weatherApiService: WeatherApiService) {
    this.weatherApiService.weatherResponse.subscribe(
      (wthr: IWeatherContext) => {
        this.test = wthr;

        this.mainForecast = wthr.mainWeather == 'Fog' ? 'Mist' : wthr.mainWeather ,
        this.tempreC = (wthr.temperature - 273).toFixed(1),
        this.temperF = (((wthr.temperature - 273) * (9/5)) + 32 ).toFixed(0)

      },
      error => {

      }
    );
  }

  ngOnInit() {

  }

}
