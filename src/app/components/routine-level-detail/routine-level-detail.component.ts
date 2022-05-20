import { Component, Injector, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routine-level-detail',
  templateUrl: './routine-level-detail.component.html',
  styleUrls: ['./routine-level-detail.component.scss'],
})
export class RoutineLevelDetailComponent implements OnInit {

  
  public exercise: any;
  public level: any;
 
  public constructor(private router: Router,private route: ActivatedRoute,protected injector: Injector) {

    this.route.queryParams.subscribe(params =>{
      if(params)
      {
        this.exercise = JSON.parse(params['exercise']);
        this.level = JSON.parse(params['level']);
      }
    })
  } 
   
  ngOnInit() {
  }

  public start_workout() 
  {
      this.router.navigate(['./start-workout'], {queryParams: { exercise: JSON.stringify(this.level)}});
  } 

}
