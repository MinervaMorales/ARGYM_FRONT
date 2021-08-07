import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
gender: string = "m";    
country: string = "10";    
  constructor() { }

  ngOnInit() {
  }

}
