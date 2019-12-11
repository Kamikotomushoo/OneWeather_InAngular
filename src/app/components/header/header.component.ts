import { Component, OnInit } from '@angular/core';
import { WeatherApiService } from '../../services/weather-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  City : string  = '';
  constructor(private weatherApiService: WeatherApiService, private router: Router) {
    this.weatherApiService.cityInHeader.subscribe(
      (cityName : string) => this.City = cityName
    );
   }

  ngOnInit() {
  }

  backToMain(){
    this.router.navigate(['/']);
  }

}
