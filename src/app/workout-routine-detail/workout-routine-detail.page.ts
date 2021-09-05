import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-workout-routine-detail',
  templateUrl: './workout-routine-detail.page.html',
  styleUrls: ['./workout-routine-detail.page.scss'],
})
export class WorkoutRoutineDetailPage implements OnInit {
 
  ngOnInit() {
  }
  constructor(private route: Router) {
    
  } 
 start_workout() {
    this.route.navigate(['./start-workout']);
  }

}
