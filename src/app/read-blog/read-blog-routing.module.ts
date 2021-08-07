import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReadBlogPage } from './read-blog.page';

const routes: Routes = [
  {
    path: '',
    component: ReadBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReadBlogPageRoutingModule {}
