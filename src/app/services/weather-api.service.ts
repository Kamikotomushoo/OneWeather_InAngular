import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient  } from '@angular/common/http';
import { IWeatherContext} from '../interfaces/weather-context';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherApiService {

  cityInHeader = new Subject<string>();
  weatherResponse = new Subject<IWeatherContext>();

  constructor(private http: HttpClient) {}

  getWeather(cityName: string) {
    try {
      var returnObserveble = this.http.get(environment.apiUrl + '/weather?q='
      + cityName + '&appid=5d60c80406f8941039d85837e08019a1');
      return returnObserveble;
    } catch {
      return null;
    }
  }
}
