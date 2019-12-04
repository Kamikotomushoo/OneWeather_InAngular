import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';
import {WeatherContext, IWeatherContext} from '../../interfaces/weather-context';


@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  constructor(private weatherApiService: WeatherApiService) { }

  ngOnInit() {
    this.onLoad();
  }

  private onLoad(){
    this.weatherApiService.getWeather('Lviv')
    .subscribe(responseData => {
      let d = responseData as any;

      let cntx: IWeatherContext  = { mainWeather: d.weather[0].main,
        temperature: d.main.temp,
        cityName: d.name,
        countryName: d.sys.country,
        humidity: d.main.humidity,
        windSpeed: d.wind.speed,
        pressure: d.main.pressure
      };

      this.weatherApiService.weatherResponse.next(cntx);
      this.weatherApiService.cityInHeader.next('Lviv');
    },
    error =>{
      alert('This city does not exist!');
      this.weatherApiService.cityInHeader.next('');
    });
  }

  sendRequestToApi(cityName: string)
  {
    this.weatherApiService.getWeather(cityName)
    .subscribe(responseData => {
      let d = responseData as any;
      let cntx: IWeatherContext  = { mainWeather: d.weather[0].main,
        temperature: d.main.temp,
        cityName: d.name,
        countryName: d.sys.country,
        humidity: d.main.humidity,
        windSpeed: d.wind.speed,
        pressure: d.main.pressure
      };
      this.weatherApiService.weatherResponse.next(cntx);
      this.weatherApiService.cityInHeader.next(cntx.cityName);
    },
    error => {
      alert('This city does not exist!');
      this.weatherApiService.cityInHeader.next('');
      // this.weatherApiService.weatherResponse.next(cntx);

    });

  }

}
