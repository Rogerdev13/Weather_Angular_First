import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WheaterService {
  URI: string='';
  apiKey = '3b1717495d888a3e58e122b8c0f6a0bf';
  constructor(private httpClient:HttpClient) { 
    this.URI=`https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  }

  getWeather(nameCity:string){
    return this.httpClient.get(`${this.URI}${nameCity}`)
  }
}
