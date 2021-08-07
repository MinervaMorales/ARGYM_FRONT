import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-alarm',
  templateUrl: './set-alarm.page.html',
  styleUrls: ['./set-alarm.page.scss'],
})
export class SetAlarmPage implements OnInit {
    day1 = false;
    day2 = false;
    day3 = false;
    day4 = true;
    day5 = true;
    day6 = true;
    day7 = false;
  constructor() { }

  ngOnInit() {
  }

 toggleDay1(){
   this.day1 = !this.day1;
   } 
 toggleDay2(){
   this.day2 = !this.day2;
   }  
 toggleDay3(){
   this.day3 = !this.day3;
   }  
 toggleDay4(){
   this.day4 = !this.day4;
   }  
 toggleDay5(){
   this.day5 = !this.day5;
   }  
 toggleDay6(){
   this.day6 = !this.day6;
   } 
 toggleDay7(){
   this.day7 = !this.day7;
   } 
}
