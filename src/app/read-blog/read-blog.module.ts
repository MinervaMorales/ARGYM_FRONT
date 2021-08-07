import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
 
import { IonicModule } from '@ionic/angular';

import { ReadBlogPageRoutingModule } from './read-blog-routing.module';

import { ReadBlogPage } from './read-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TranslateModule,   
    ReadBlogPageRoutingModule
  ],
  declarations: [ReadBlogPage]
})
export class ReadBlogPageModule {}
