import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagecommentComponent } from './user-space/pagecomment/pagecomment.component';
import { PagealbumComponent } from './user-space/pagealbum/pagealbum.component';
import { PagePostComponent } from './user-space/page-post/page-post.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'commentsUrl',component:PagecommentComponent},
{path:'albumUrl',component:PagealbumComponent},
{path:'postPage',component:PagePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
