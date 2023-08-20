import { Injectable } from '@angular/core';
import { commentModel } from '../schema/commentModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
apiUrl='https://jsonplaceholder.typicode.com/comments';

constructor(private http:HttpClient){}

getComments():Observable<commentModel[]>{

  return this.http.get<commentModel[]>(this.apiUrl,{ headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8'})})
}


}
