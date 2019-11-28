import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient  } from '@angular/common/http';
import {WeatherContext} from '../interfaces/weather-context';


@Injectable()
export class WeatherApiService {

  cityInHeader = new Subject<string>();
  weatherResponse = new Subject<WeatherContext>();

  constructor(private http: HttpClient){}

  getWeather(cityName: string)
  {

     return this.http.get('https://api.openweathermap.org/data/2.5/weather?q='
     + cityName + '&appid=5d60c80406f8941039d85837e08019a1');

  }
}
