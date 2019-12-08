import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../../services/weather-api.service';
import { IWeatherContext} from '../../../interfaces/weather-context';


@Component({
  selector: 'app-main-response',
  templateUrl: './main-response.component.html',
  styleUrls: ['./main-response.component.scss']
})
export class MainResponseComponent implements OnInit {

  mainForecast : string = 'Snow';
  tempreC: string = '1.2';
  temperF: string = '32';
  weatherInfo: IWeatherContext;
  exist: boolean = false;

  constructor(private weatherApiService: WeatherApiService) {

  }

  ngOnInit() {
    this.weatherApiService.weatherResponse.subscribe(
      (wthr: IWeatherContext) => {
        if (wthr.cityName !== 'This city does not exist!') {
          this.exist = true;
          this.weatherInfo = wthr;
          this.mainForecast = wthr.mainWeather == 'Fog' ? 'Mist' : wthr.mainWeather ;
          this.tempreC = (wthr.temperature - 273).toFixed(1);
          this.temperF = (((wthr.temperature - 273) * (9 / 5)) + 32 ).toFixed(0);
        } else {
          this.exist = false;
          this.weatherInfo.cityName = wthr.cityName;
        }

      }
    );
  }

}
