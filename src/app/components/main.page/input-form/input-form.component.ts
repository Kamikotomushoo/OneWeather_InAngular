import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherApiService } from '../../../services/weather-api.service';
import {IWeatherContext} from '../../../interfaces/weather-context';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NumContainsValidator } from '../../../validators/number-contains-checker';



@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit , OnDestroy {

  inputForm: FormGroup;
  regex: RegExp = /[0-9]/;

  constructor(private weatherApiService: WeatherApiService) { }

  ngOnInit() {
    this.inputForm = new FormGroup({
      'cityField': new FormControl(null, [Validators.required, NumContainsValidator.bind(this)])
    });
    this.onLoad();
  }

  private onLoad() {
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
      this.weatherApiService.cityInHeader.next('');
    });
  }

  OnSubmit(){
    this.weatherApiService.getWeather(this.inputForm.get('cityField').value)
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
      this.weatherApiService.cityInHeader.next('');
      let doesntExistCity: IWeatherContext = { cityName: 'This city does not exist!'};
      this.weatherApiService.weatherResponse.next(doesntExistCity);
    });
  }
  ngOnDestroy(){
    this.weatherApiService.cityInHeader.next('');
  }
  
}
