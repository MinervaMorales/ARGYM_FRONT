import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

 workout_detail() {
    this.route.navigate(['./workout-detail']);
  } 
}
