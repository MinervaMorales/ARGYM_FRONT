import { Component, OnInit } from '@angular/core';
import { Users } from 'src/models/Users';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public user: Users = new Users();
  constructor(public storage: Storage) { }

  ngOnInit() {
    this.getUser();
  }

  public async getUser()
  {
    this.user = new Users(await this.storage.get( 'USER' ))
  }

}
