import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { weatherData } from '../moduels/weather.model';
@Injectable({
  providedIn: 'root',
})
export class TempreatureService {
  private apiUrl = 'https://open-weather13.p.rapidapi.com/city';

  constructor(private http: HttpClient) {}

  getCityWeather(city: string): Observable<weatherData> {
    // Set up headers
    const headers = new HttpHeaders({
      'X-RapidAPI-Key': 'ebe7cb7feamsh21212028334339bp11fb58jsnfc4443de7f0f',
      'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
    });

    // Set up query parameters
    const params = {
      name: city,
    };

    // Make the GET request with headers and parameters
    return this.http.get<weatherData>(`${this.apiUrl}/${city}`, {
      headers,
      params,
    });
  }
}
