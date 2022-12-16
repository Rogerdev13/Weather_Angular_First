import { Component , OnInit } from '@angular/core';
import { WheaterService } from './service/wheater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentWheater:any;

  constructor(private wheaterService: WheaterService){

  }
  ngOnInit(){
   
  }

  getWheaterApi(cityName:string){
    this.wheaterService.getWeather(cityName)
      .subscribe(res => this.currentWheater = res , err => console.log(err))
  }

  submitLocation(cityName:HTMLInputElement){
    if(cityName.value){
      this.getWheaterApi(cityName.value)
      cityName.value = '';
    }else{
      alert('Please type something');
    }
    cityName.focus();
    return false
  }
}
