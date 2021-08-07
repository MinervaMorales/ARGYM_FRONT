import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-workout',
  templateUrl: './start-workout.page.html',
  styleUrls: ['./start-workout.page.scss'],
})
export class StartWorkoutPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 rest() {
    this.route.navigate(['./rest']);
  } 
}
