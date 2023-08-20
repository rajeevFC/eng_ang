import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserSpaceComponent } from './user-space/user-space.component';
import {HttpClientModule} from '@angular/common/http';
import { CommentComponent } from './comment/comment.component';
import { HeadersComponent } from './headers/headers.component';
import { AlbumComponent } from './album/album.component';
import { HomeComponent } from './home/home.component';
import { PagecommentComponent } from './user-space/pagecomment/pagecomment.component';
import { PagealbumComponent } from './user-space/pagealbum/pagealbum.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PagePostComponent } from './user-space/page-post/page-post.component';

@NgModule({
  declarations: [
    AppComponent,
    UserSpaceComponent,
    CommentComponent,
    HeadersComponent,
    AlbumComponent,
    HomeComponent,
    PagecommentComponent,
    PagealbumComponent,
    PostCreateComponent,
    PagePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
