import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { weatherData } from '../moduels/weather.model';
@Injectable({
  providedIn: 'root',
})
export class TempreatureService {
  private apiKey = 'c8a897c503614766b39220025211209';
  private apiUrl = 'https://api.weatherapi.com/v1/forecast.json';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}&aqi=no&alerts=no`;
    return this.http.get(url);
  }
}
