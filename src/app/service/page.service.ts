import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { CommentModel } from '../schema/commentModel';
@Injectable({
  providedIn: 'root'
})
export class PageService {
apiUrl='https://jsonplaceholder.typicode.com/comments';
// apiUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { }
  //  headers = new HttpHeaders({'Content-Type': 'application/json'})
// const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});

  // getComment():Observable<CommentModel[]>{

    // return this.http.get<CommentModel[]>(this.apiUrl,{ headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})});
  // }

}
