import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.page.html',
  styleUrls: ['./alarm.page.scss'],
})
export class AlarmPage implements OnInit {
 item1 = false;
 item2 = false;
 item3 = true;
  constructor(private route: Router) { }

  ngOnInit() {
  }
 toggle1(){
   this.item1 = !this.item1;
   }  
 toggle2(){
   this.item2 = !this.item2;
   } 
 toggle3(){
   this.item3 = !this.item3;
   } 

 set_alarm() {
    this.route.navigate(['./set-alarm']);
  }      
}
