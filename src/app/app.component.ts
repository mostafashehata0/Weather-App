import { Component, OnInit } from '@angular/core';
import { TempreatureService } from './services/tempreature.service';
import { weatherData } from './moduels/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private tempreature: TempreatureService) {}
  weatherData?: weatherData;
  cityName: string = 'cairo';
  // ==============================
  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  // =============================
  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
  // ===============================
  getWeatherData(cityName: string) {
    this.tempreature.getCityWeather(cityName).subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      },
    });
  }
}
