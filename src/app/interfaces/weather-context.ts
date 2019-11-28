export class WeatherContext {
  constructor(
    public mainWeather : string,
    public temperature : number,
    public cityName : string,
    public countryName : string,
    public humidity : number,
    public windSpeed : number,
    public pressure : number
  ){  }
}
