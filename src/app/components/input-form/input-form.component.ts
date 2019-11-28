import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';
import {WeatherContext} from '../../interfaces/weather-context';


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
      let cntx  = new  WeatherContext(d.weather[0].main,
                              d.main.temp,
                              d.name,
                              d.sys.country,
                              d.main.humidity,
                              d.wind.speed,
                              d.main.pressure);

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
      let cntx  = new  WeatherContext(d.weather[0].main,
                              d.main.temp,
                              d.name,
                              d.sys.country,
                              d.main.humidity,
                              d.wind.speed,
                              d.main.pressure);

      this.weatherApiService.weatherResponse.next(cntx);
      this.weatherApiService.cityInHeader.next(cityName);
    },
    error =>{
      alert('This city does not exist!');
      this.weatherApiService.cityInHeader.next('');
    });

  }

}
