import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../schema/prepostModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postUrl ='https://jsonplaceholder.typicode.com/posts';

  constructor(private http:HttpClient) { }

  postDataJson(post:PostModel):Observable<PostModel>{
    return this.http.post<PostModel>(this.postUrl,post)
  }
}
