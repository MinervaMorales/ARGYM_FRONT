import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public storage: Storage = this.injector.get( Storage );

  constructor(private route: Router, protected injector: Injector) { }

  ngOnInit() {
  }

  public workouts() 
  {
    this.route.navigate(['./workouts']);
  } 

  public toRecognize()
  {
    this.route.navigate(['./object-detection'])
  }

  public alarm() 
  {
    this.route.navigate(['./alarm']);
  }  

  public routineCategories()
  {
    this.route.navigate(['./routine-categories']);
  }
}
