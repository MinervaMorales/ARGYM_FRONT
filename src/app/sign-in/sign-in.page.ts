import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(private navCtrl: NavController, private route: Router) { }

  ngOnInit() {
  } 
 forgot_password() {
    this.route.navigate(['./forgot-password']);
  }  
 home() {
    this.navCtrl.navigateRoot(['./home']);
  }
 sign_up() {
    this.route.navigate(['./sign-up']);
  }  
}
